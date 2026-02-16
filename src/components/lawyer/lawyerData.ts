export interface Lawyer {
  code: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  specialization: string;
  jurisdiction: string;
  image: string;
  verifiedDate: string;
}

export const lawyerDatabase: Lawyer[] = [
  {
    code: '56BAC56829',
    name: 'Jamie Anderson',
    email: 'Jamie5050@gmail.com',
    phone: '+44 7902 533135',
    address: 'Studio 3, Stuart House, City Road, Peterborough, PE1 1QF, England',
    specialization: 'Commercial Law',
    jurisdiction: 'England & Wales',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771275669605_004f6c28.jpg',
    verifiedDate: '16 Feb 2026',
  },
  {
    code: 'A7FDE91034',
    name: 'Eleanor Whitfield',
    email: 'e.whitfield@lawpartners.co.uk',
    phone: '+44 7845 221098',
    address: "14 Lincoln's Inn Fields, Holborn, London, WC2A 3ED, England",

    specialization: 'Criminal Law',
    jurisdiction: 'England & Wales',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771276144691_c25f9070.jpg',
    verifiedDate: '10 Jan 2026',
  },
  {
    code: 'B3CAD72156',
    name: 'Marcus Chen-Williams',
    email: 'm.chenwilliams@barristersgroup.com',
    phone: '+44 7712 884523',
    address: '8 Queen Street, Manchester, M2 5JB, England',
    specialization: 'Corporate Law',
    jurisdiction: 'England & Wales',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771276168646_b2a01017.jpg',
    verifiedDate: '22 Dec 2025',
  },
  {
    code: 'C9EBF40387',
    name: 'Sarah Pemberton',
    email: 's.pemberton@familylaw.org.uk',
    phone: '+44 7623 990147',
    address: '25 Castle Street, Bristol, BS1 2BQ, England',
    specialization: 'Family Law',
    jurisdiction: 'England & Wales',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771276149311_20a22e0f.jpg',
    verifiedDate: '05 Feb 2026',
  },
  {
    code: 'D2FAC85612',
    name: 'Richard Okonkwo',
    email: 'r.okonkwo@immigrationexperts.co.uk',
    phone: '+44 7456 332871',
    address: '3rd Floor, Exchange Tower, 19 Canning Street, Edinburgh, EH3 8EG, Scotland',
    specialization: 'Immigration Law',
    jurisdiction: 'Scotland',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771276179857_a36791c5.png',
    verifiedDate: '28 Jan 2026',
  },
  {
    code: 'E6GBH19045',
    name: 'Victoria Hargreaves',
    email: 'v.hargreaves@iplawchambers.com',
    phone: '+44 7891 556234',
    address: 'Suite 12, St. James House, Vicar Lane, Leeds, LS1 7JH, England',
    specialization: 'Intellectual Property Law',
    jurisdiction: 'England & Wales',
    image: 'https://d64gsuwffb70l.cloudfront.net/699385503e8314d2d0830bc8_1771276156969_f3b3176c.png',
    verifiedDate: '14 Feb 2026',
  },
];

export function findLawyerByCode(code: string): Lawyer | undefined {
  return lawyerDatabase.find(
    (lawyer) => lawyer.code.toUpperCase() === code.toUpperCase()
  );
}
