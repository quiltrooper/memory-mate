import React from 'react';
import { WifiOff, CloudUpload, CheckCircle2 } from 'lucide-react';

interface OfflineSyncBannerProps {
  offlineMode: boolean;
  queuedCount: number;
  onSync: () => void;
  isSyncing: boolean;
  lastSyncedTime?: string;
}

export const OfflineSyncBanner: React.FC<OfflineSyncBannerProps> = ({
  offlineMode,
  queuedCount,
  onSync,
  isSyncing,
  lastSyncedTime,
}) => {
  if (!offlineMode && queuedCount === 0) {
    return null;
  }

  return (
    <div
      id="offline-sync-banner"
      className="bg-[#F5F3EF] border-b border-[#E5E1D8] px-4 py-2.5 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#2D2E2E]">
        <div className="flex items-center gap-2">
          {offlineMode ? (
            <WifiOff className="w-4 h-4 text-[#8C5E28] shrink-0" />
          ) : (
            <CloudUpload className="w-4 h-4 text-[#7C9070] shrink-0" />
          )}
          <span>
            {offlineMode ? (
              <>
                <strong className="font-semibold text-[#2D2E2E]">Offline Mode Active:</strong> All cognitive games and notes are saved safely on your device.
              </>
            ) : (
              <>
                <strong className="font-semibold text-[#2D2E2E]">Local Queue:</strong> You have {queuedCount} game session{queuedCount > 1 ? 's' : ''} stored locally awaiting sync.
              </>
            )}
            {lastSyncedTime && (
              <span className="hidden md:inline ml-2 text-[#73706A]">
                (Last synced: {lastSyncedTime})
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {queuedCount > 0 ? (
            <button
              id="sync-now-banner-btn"
              type="button"
              onClick={onSync}
              disabled={isSyncing}
              className="px-3.5 py-1.5 bg-[#7C9070] hover:bg-[#687A5E] disabled:bg-[#D5DFD0] text-white font-semibold rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <CloudUpload className="w-4 h-4" />
              <span>{isSyncing ? 'Syncing with Gemini...' : `Sync Now (${queuedCount})`}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 text-xs font-semibold text-[#5C6E53] bg-[#F0F3EE] border border-[#D5DFD0] px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>All records up to date</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
