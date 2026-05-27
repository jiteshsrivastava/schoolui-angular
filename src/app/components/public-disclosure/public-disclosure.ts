import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-disclosure',
  imports: [CommonModule],
  templateUrl: './public-disclosure.html',
  styleUrl: './public-disclosure.scss'
})
export class PublicDisclosureComponent {
  documents = [
    { label: 'Annual Academic Calendar 2026-2027', file: 'ACADEMIC_CALANDAR_2026-2027.pdf' },
    { label: 'Affiliation & Upgradation Letter and Recent Extension of Affiliation', file: 'AFFICATION_AND_UPGRADATION_LETTER_AND_RECENT_EXTENSION_OF_AFFLIATION_SSL.pdf' },
    { label: 'Recognition Certificate under RTE Act, 2009', file: 'RECOGNITION_CERTIFICATE_UNDER_RTE_ACT_2009_AND_ITS_RENEWAL_IF_APPLICABLE.pdf' },
    { label: 'Societies, Company, Registration, Renewal Certificate', file: 'SOCIETIES_CAMPANY_REGISTRATION_RENEWAL_CERTIFICATE.pdf' },
    { label: 'No Objection Certificate (NOC) by State Govt & UT', file: 'NO_BJECTION_CERTIFICATE_NOC_ISSUED_IF_APPLICABLE_BY_THE_STATE_GOVT_AND_UT.pdf' },
    { label: 'Self Certification for Affiliation / Upgradation / Extension', file: 'THE_SELF_CERTIFICATION_SUBMITTED_BY_THE_SCHOOL_FOR_AFFLIATION_UPGRADATION_EXTENSION_OF_AFFILIATION.pdf' },
    { label: 'Building Safety Certificate as per National Building Code', file: 'BUILDING_SAFETY_CERTIFICATE_AS_PER_THE_NATIONAL_BUILDING_CODE.pdf' },
    { label: 'Fire Safety Certificate', file: 'FIRE_SAFETY_CERTIFICATE_ISSUED_BY_THE_COMPETENT_AUTHORITY.pdf' },
    { label: 'List of School Management Committee (SMC)', file: 'LIST_OF_SCHOOL_MANAGEMENT_COMMITTEE_SMC.pdf' },
    { label: 'Fee Structure of the School', file: 'FEE_STRUCTURE_OF_THE_SCHOOL_2026-2027.pdf' },
    { label: 'Last Three Year Result of Board Examination', file: 'RESULT_OF_THE_BOARD_EXAMINATION.pdf' },
    { label: 'List of Parents Teachers Association', file: 'LIST_OF_PARENTS_TEACHERS_ASSOCIATION.pdf' },
    { label: 'Water, Health and Sanitation Certificates', file: 'WATER_HEALTH_AND_SANITATION_CERTIFICATES.pdf' },
    { label: 'Staff Details', file: 'staff_details.pdf' },
  ];
}
