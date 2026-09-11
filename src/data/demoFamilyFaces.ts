import { PatientDataset } from '../types';

// These are clearly labeled stock demo portraits. They are used only to make
// the face-recall flow demonstrable for every synthetic profile.
const DEMO_FAMILY_PORTRAITS = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=80',
];

export function addDemoFamilyFaces(
  patients: PatientDataset[],
  demoPatientIds?: Set<string>,
): PatientDataset[] {
  return patients.map((patient, index) => {
    if (demoPatientIds && !demoPatientIds.has(patient.profile.id)) return patient;

    const familyFaceId = `face-${patient.profile.id}-family`;
    if (patient.knownFaces.some((face) => face.id === familyFaceId)) return patient;

    return {
      ...patient,
      knownFaces: [
        ...patient.knownFaces,
        {
          id: familyFaceId,
          name: `Family member of ${patient.profile.name}`,
          relationship: 'Family Member',
          location: patient.profile.location,
          notes: 'Synthetic demo portrait for the Memory Mate face-recall feature.',
          photoUrl: DEMO_FAMILY_PORTRAITS[index % DEMO_FAMILY_PORTRAITS.length],
        },
      ],
    };
  });
}
