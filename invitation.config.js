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
    name: 'Vishali',
    parents: 'Daughter of Mrs. Anuradha & Mr. Arun Mehra',
  },
  groom: {
    name: 'Honey',
    parents: 'Son of Mrs. Monika & Mr. Rajesh Dhawan',
  },

  // Shown under the names on the opening screen. Set to '' to hide.
  hashtag: '#VishalikaHoney',

  // Top line of the invitation card. Set to '' to hide.
  invocation: '॥ श्री गणेशाय नमः ॥',

  // The blessing / invitation block on the first card
  blessings: [
    { text: 'With the divine blessings of', names: ['Pujya Mata Lal devi ji'] },
    { text: 'and the love and blessings of our families', names: ['Smt. Anuradha Mehra', 'Mr. Arun Mehra , Pankaj & Rattan, '] },
  ],
  inviteLine: 'cordially invite you to celebrate the wedding of their beloved daughter',

  // Heading above the event cards
  timeline: {
    eyebrow: 'Wedding Timeline',
    title: 'Mark Your Calendars',
    subtitle: 'We can’t wait to celebrate with you.',
  },

  // Event cards. Use either `time` (single line) or `schedule` (several lines).
  events: [
    {
      date: '11 March 2027',
      title: 'Wedding',
      schedule: [
        'Welcome of Baraat – 8:00 PM',
        'Jaimala – 9:00 PM',
        'Followed by Dinner – 10:00 PM',
      ],
      venue: 'THE ROOSEVELT',
      mapUrl: 'https://maps.app.goo.gl/shjhq19fhBbNhQLE7',
    },
  ],

  // Optional personal note shown between event cards. Set to null to hide.
  host: {
    afterEvent: 1, // appears after this many event cards
    names: 'Pankaj & Rattan',
    lines: ['await your presence on', 'their Sister’s special day!'],
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
 null heavenlyBlessings: { text: 'Heavenly blessings from the late', name: 'Mr. Hari Om Mehra' },

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
  music: '',

  footer: 'With love, from both our families',
}
