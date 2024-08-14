export type fu = {
  score: number;
  name: string;
}

export const FU = {
  'base': {
    score: 20,
    name: 'base'
  },
  'open pinfu': {
    score: 2,
    name: 'open pinfu'
  },
  'chiitoitsu': {
    score: 25,
    name: 'chiitoitsu'
  },
  //tanki
  'pair wait': {
    score: 2,
    name: 'pair wait'
  },
  //penchan
  'edge wait': {
    score: 2,
    name: 'edge wait'
  },
  //kanchan
  'closed wait': {
    score: 2,
    name: 'closed wait'
  },
  'tsumo': {
    score: 2,
    name: 'tsumo'
  },
  'menzen ron': {
    score: 10,
    name: 'menzen ron'
  },
  'open triplet simple': {
    score: 2,
    name: 'open triplet simple'
  },
  'open triplet non simple': {
    score: 4,
    name: 'open triplet non simple'
  },
  'closed triplet simple': {
    score: 4,
    name: 'closed triplet simple'
  },
  'closed triplet non simple': {
    score: 8,
    name: 'closed triplet non simple'
  },
  'open kan simple': {
    score: 8,
    name: 'open kan simple'
  },
  'open kan non simple': {
    score: 16,
    name: 'open kan non simple'
  },
  'closed kan simple': {
    score: 16,
    name: 'closed kan simple'
  },
  'closed kan non simple': {
    score: 32,
    name: 'closed kan non simple'
  },
  'yakuhai pair': {
    score: 2,
    name: 'yakuhai pair'
  },
  'kokushimusou': {
    score: 0,
    name: 'kokushimusou'
  }
}

Object.freeze(FU);