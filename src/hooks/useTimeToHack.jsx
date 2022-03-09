const timeToHack = {
  numbersOnly: [
    { time: 'instantly', level: 'awful' },
    { time: 'instantly', level: 'awful' },
    { time: 'instantly', level: 'awful' },
    { time: 'instantly', level: 'awful' },
    { time: 'instantly', level: 'awful' },
    { time: 'in 2 seconds', level: 'bad' },
    { time: 'in 19 seconds', level: 'bad' },
    { time: 'in 3 minutes', level: 'bad' },
    { time: 'in 32 minutes', level: 'bad' },
    { time: 'in 5 hours', level: 'bad' },
    { time: 'in 2 days', level: 'bad' },
    { time: 'in 3 weeks', level: 'bad' },
    { time: 'in >3 weeks', level: 'ok' }
  ],
  lowercase: [
    { time: 'instantly', level: 'awful' },
    { time: 'instantly', level: 'awful' },
    { time: 'in 10 seconds', level: 'bad' },
    { time: 'in 4 minutes', level: 'bad' },
    { time: 'in 2 hours', level: 'bad' },
    { time: 'in 2 days', level: 'bad' },
    { time: 'in 2 months', level: 'ok' },
    { time: 'in 4 years', level: 'ok' },
    { time: 'in 100 years', level: 'ok' },
    { time: 'in 3k years', level: 'ok' },
    { time: 'in 69k years', level: 'ok' },
    { time: 'in 2m years', level: 'good' },
    { time: 'in >2m years', level: 'good' }
  ],
  lowerUppercase: [
    { time: 'in 2 seconds', level: 'bad' },
    { time: 'in 2 minutes', level: 'bad' },
    { time: 'in 1 hour', level: 'bad' },
    { time: 'in 3 days', level: 'bad' },
    { time: 'in 5 months', level: 'bad' },
    { time: 'in 24 years', level: 'ok' },
    { time: 'in 1k years', level: 'ok' },
    { time: 'in 64k years', level: 'ok' },
    { time: 'in 3m years', level: 'good' },
    { time: 'in 173m years', level: 'good' },
    { time: 'in 9bn years', level: 'good' },
    { time: 'in 467bn years', level: 'perfect' },
    { time: 'in >467bn years', level: 'perfect' }
  ],
  numbersLowerUppercase: [
    { time: 'in 7 seconds', level: 'bad' },
    { time: 'in 7 minutes', level: 'bad' },
    { time: 'in 7 hours', level: 'bad' },
    { time: 'in 3 weeks', level: 'bad' },
    { time: 'in 3 years', level: 'ok' },
    { time: 'in 200 years', level: 'ok' },
    { time: 'in 12k years', level: 'ok' },
    { time: 'in 750k years', level: 'good' },
    { time: 'in 46m years', level: 'good' },
    { time: 'in 3bn years', level: 'good' },
    { time: 'in 179bn years', level: 'perfect' },
    { time: 'in 11tn years', level: 'perfect' },
    { time: 'in >11tn years', level: 'perfect' }
  ],
  numbersLowerUppercaseAndSymbols: [
    { time: 'in 31 seconds', level: 'bad' },
    { time: 'in 39 minutes', level: 'bad' },
    { time: 'in 2 days', level: 'bad' },
    { time: 'in 5 months', level: 'bad' },
    { time: 'in 34 years', level: 'ok' },
    { time: 'in 3k years', level: 'ok' },
    { time: 'in 202k years', level: 'good' },
    { time: 'in 16m years', level: 'good' },
    { time: 'in 1bn years', level: 'good' },
    { time: 'in 92bn years', level: 'perfect' },
    { time: 'in 7tn years', level: 'perfect' },
    { time: 'in 438tn years', level: 'perfect' },
    { time: 'in >438tn years', level: 'perfect' }
  ]
};

function useTimeToHack(password) {
  if (password.length < 7) {
    return { time: 'instantly', level: 'awful' };
  }

  const { numbers, lowercase, uppercase, symbols } = decodePassword(password);
  const index = password.length <= 18 ? password.length - 7 : 12;

  if (numbers && lowercase && uppercase && symbols) {
    return timeToHack.numbersLowerUppercaseAndSymbols[index];
  }

  if (numbers && lowercase && uppercase) {
    return timeToHack.numbersLowerUppercase[index];
  }

  if ((lowercase && uppercase) || ((lowercase || uppercase) && numbers)) {
    return timeToHack.lowerUppercase[index];
  }

  if (lowercase || uppercase) {
    return timeToHack.lowercase[index];
  }

  return timeToHack.numbersOnly[index];
}

function decodePassword(password) {
  return {
    numbers: /\d/.test(password),
    lowercase: /[a-zа-я]/.test(password),
    uppercase: /[A-ZА-Я]/.test(password),
    symbols: /[^A-Za-zа-яА-Я0-9]/.test(password)
  };
}

export default useTimeToHack;
