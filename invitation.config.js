/*
 * ============================================================
 *  YOUR INVITATION DETAILS — edit everything in this one file
 * ============================================================
 *
 *  • Change any text between the quotes.
 *  • To remove an optional section, set it to null (e.g. host: null).
 *  • Lists ([ ... ]) can have as many or as few items as you like.
 *  • Dates like "18th November" get their "th"/"st" styled automatically.
 *  • Images live in the /img folder. Replace a file (keep the same name)
 *    or point the path below to your own file.
 *  • Also update the <title> and share-preview text at the top of index.html.
 */
window.INVITATION = {
  bride: {
    name: 'Aanya',
    parents: 'Daughter of Mrs. Meera & Mr. Rajesh Sharma',
  },
  groom: {
    name: 'Kabir',
    parents: 'Son of Mrs. Kavita & Mr. Sanjay Mehra',
  },

  // Shown under the names on the opening screen. Set to '' to hide.
  hashtag: '#AanyaKaKabir',

  // Top line of the invitation card. Set to '' to hide.
  invocation: '॥ श्री गणेशाय नमः ॥',

  // The blessing / invitation block on the first card
  blessings: [
    { text: 'With the divine blessings of our beloved late', names: ['Shri Ramesh Chandra Sharma'] },
    { text: 'and the love and blessings of our families', names: ['Smt. Kamla Sharma', 'Smt. Usha & Sh. Prakash Mehra'] },
  ],
  inviteLine: 'cordially invite you to celebrate the wedding of their beloved granddaughter',

  // Heading above the event cards
  timeline: {
    eyebrow: 'Wedding Timeline',
    title: 'Mark Your Calendars',
    subtitle: 'We can’t wait to celebrate with you.',
  },

  // Event cards. Use either `time` (single line) or `schedule` (several lines).
  events: [
    {
      date: '18th November',
      title: 'Sagan & Cocktail',
      time: '7:00 PM onwards',
      venue: 'The Grand Courtyard, New Delhi',
      mapUrl: 'https://maps.google.com/?q=New+Delhi',
    },
    {
      date: '21st November',
      title: 'Wedding',
      schedule: [
        'Welcome of Baraat – 5:00 PM',
        'Jaimala & Phere – 6:00 PM',
        'Followed by Reception – 8:00 PM',
      ],
      venue: 'Rose Garden Estate',
      mapUrl: 'https://maps.google.com/?q=New+Delhi',
    },
  ],

  // Optional personal note shown between event cards. Set to null to hide.
  host: {
    afterEvent: 1, // appears after this many event cards
    names: 'Riya & Arjun',
    lines: ['await your presence on', 'their didi’s special day!'],
  },

  // "Meet the Bride and Groom" section
  couple: {
    heading: 'Meet the',
    title: 'Bride and Groom',
    photo: '/img/couple.png', // replace with your own photo
    photoAlt: 'The bride and groom together',
  },

  // "Celebrating Their New Beginning" section
  families: {
    title: 'Their New Beginning',
    eyebrow: 'Celebrating',
    names: [
      'Mrs. Neha and Mr. Vikram Sharma',
      'Mrs. Pooja and Mr. Anil Mehra',
      'Mrs. Ritu and Mr. Deepak Kapoor',
    ],
  },

  // Remembrance line. Set to null to hide.
  heavenlyBlessings: { text: 'Heavenly blessings from the late', name: 'Mr. Hari Om Mehra' },

  rsvp: {
    lines: ['Sharma Family', 'Mehra Family'],
    phones: ['9800000000', '9811111111'],
  },

  countdown: {
    // Date & time to count down to (with your timezone offset, +05:30 = India)
    target: '2026-11-21T17:00:00+05:30',
    heading: 'The Countdown Begins',
    message:
      'Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.',
  },

  // Background music: put an .mp3 in /audio and set its path, or '' for no music
  music: '/audio/sahiba.mp3',

  footer: 'With love, from both our families',
}
