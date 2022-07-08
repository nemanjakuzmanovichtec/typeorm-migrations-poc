export enum StatusTypes {
  CONFIRMED_WITHOUT_INJURY = 'confirmedWithoutInjury',
  CONFIRMED_WITH_INJURY = 'confirmedWithInjury',
  CONFIRMED = 'confirmed', // this is for smart alert
  UNCONFIRMED = 'unconfirmed',
  TRAINING = 'training',
  UNRESOLVED = 'unresolved',
  STAFF_SIMULATED = 'staffSimulated',
}

export enum StatusTypesOld {
  confirmedWithoutInjury = 'CONFIRMED_WITHOUT_INJURY',
  confirmedWithInjury = 'CONFIRMED_WITH_INJURY',
  rejected = 'REJECTED',
  simulated = 'SIMULATED',
  learning = 'LEARNING',
  other = 'OTHER',
  unresolved = 'UNRESOLVED',
  confirmed = 'CONFIRMED',
}
