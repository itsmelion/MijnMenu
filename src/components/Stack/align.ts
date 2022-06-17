export type Alignments =
  'start' | 'start start' | 'start center' | 'start stretch' | 'start end' |
  'center' | 'center start' | 'center center' | 'center stretch' | 'center end' |
  'end' | 'end start' | 'end stretch' | 'end end' | 'end center' |
  'baseline' | 'baseline start' | 'baseline stretch' | 'baseline end' |
  'stretch' | 'stretch start' | 'stretch stretch' | 'stretch end' |
  'between' | 'between start' | 'between stretch' | 'between between' | 'between center' | 'between end' |
  'around' | 'around start' | 'around stretch' | 'around around' | 'around center' | 'around end' |
  'even' | 'even start' | 'even stretch' | 'even even' | 'even center' | 'even end';

export const align = (axis: Alignments = 'start stretch') => {
  switch (axis) {
    case 'start start':
    case 'start':
      return {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'start stretch':
      return {
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'start center':
      return {
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'start end':
      return {
        justifyContent: 'flex-start',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    case 'center start':
      return {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'center stretch':
      return {
        justifyContent: 'center',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'center center':
    case 'center':
      return {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'center end':
      return {
        justifyContent: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    case 'end start':
      return {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'end stretch':
      return {
        justifyContent: 'flex-end',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'end center':
      return {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'end end':
    case 'end':
      return {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    case 'between start':
      return {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'between stretch':
      return {
        justifyContent: 'space-between',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'between center':
      return {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'between end':
      return {
        justifyContent: 'space-between',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    case 'around start':
      return {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'around stretch':
      return {
        justifyContent: 'space-around',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'around center':
      return {
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'around end':
      return {
        justifyContent: 'space-around',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    case 'even start':
      return {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      } as const;
    case 'even stretch':
      return {
        justifyContent: 'space-evenly',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
    case 'even center':
      return {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
      } as const;
    case 'even end':
      return {
        justifyContent: 'space-evenly',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
      } as const;
    default:
      return {
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        alignItems: 'stretch',
      } as const;
  }
};
