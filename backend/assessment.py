from datetime import datetime, timedelta, timezone
from statistics import mean

MODEL_VERSION = 'activity-support-v1'

def assess(profile, sessions, now=None):
    now = now or datetime.now(timezone.utc)
    preferences = profile.get('preferences', {})
    pace = preferences.get('responseGoalMs', 4000)
    weekly_goal = preferences.get('weeklyGoalDays', 4)
    recorded = [s for s in sessions if s.get('dataSource') == 'recorded']
    recent = recorded[:5]
    dates = set()
    for session in recorded:
        try:
            stamp = datetime.fromisoformat(session['timestamp'].replace('Z', '+00:00'))
            if stamp.tzinfo and now - timedelta(days=7) <= stamp <= now:
                dates.add(stamp.date())
        except (ValueError, KeyError):
            continue
    levels = {}
    for game in ['word', 'pattern', 'matching']:
        history = [s for s in recorded if s['game_type'] == game][:3]
        level = history[0]['level'] if history else 1
        if len(history) >= 3:
            accuracy = mean(s['accuracy'] for s in history)
            level += 1 if accuracy >= 85 else -1 if accuracy < 55 else 0
        levels[game] = min(3, max(1, level))
    output = {'modelVersion': MODEL_VERSION, 'recordedCount': len(recorded), 'minimumSessions': 3,
              'activeDays': len(dates), 'weeklyGoalDays': weekly_goal, 'responseGoalMs': pace,
              'nextLevels': levels, 'supportLevel': None, 'supportIndex': None, 'components': {},
              'explanation': 'Complete three activities to calculate an activity-support estimate. Synthetic history is excluded.'}
    if len(recent) < 3:
        return output
    accuracy = mean(s['accuracy'] for s in recent)
    response = mean(s['response_time_ms'] for s in recent)
    error_component = 100 - accuracy
    pace_component = min(100, max(0, (response / pace - 1) * 100))
    consistency_component = 100 * max(0, 1 - len(dates) / weekly_goal)
    index = round(.6 * error_component + .25 * pace_component + .15 * consistency_component, 2)
    output.update(supportIndex=index, supportLevel='Low' if index < 25 else 'Medium' if index < 50 else 'High',
                  components={'accuracy': round(accuracy, 2), 'responseTimeMs': round(response),
                              'errorComponent': round(error_component, 2), 'paceComponent': round(pace_component, 2),
                              'consistencyComponent': round(consistency_component, 2)},
                  explanation='Support index = 60% error component + 25% pace component + 15% weekly-goal shortfall. Uses the last five recorded activities and this profile’s chosen pace and weekly goal. Low <25; Medium 25–<50; High ≥50. This is a transparent prototype rule, not a diagnosis or validated clinical model.')
    return output
