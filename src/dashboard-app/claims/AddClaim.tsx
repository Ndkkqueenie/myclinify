import React, { useState } from 'react';

import MainLayout from 'dashboard-app/layouts/MainLayout';
import Tab from 'dashboard-app/common/Tab';
import {
  Base,
  ContentWrapper,
  Content,
  InputRow,
  SelectWrapper,
  SumTotalWrapper,
} from 'dashboard-app/common/Wrapper';
import ContentCollapsibleComponent, {
  Collapsible,
} from 'dashboard-app/common/ContentCollapsibleComponent';
import Dropdown from 'dashboard-app/common/Dropdown';
import { NEW_ITEMS_SELECT_OPTIONS } from 'dashboard-app/utils/constants';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ProviderClaimInput,
  HmoProfileInput,
  PersonalInformationInput,
  BackgroundInformationInput,
  NextOfKinInput,
  PreExistingConditionInput,
  HabitInput,
  PhysicalActivityInput,
  DisabilityInput,
} from 'graphql-types/globalTypes';
import MyDetail from './sub-components/MyDetail';
// import { CoverageContent } from 'dashboard-app/coverage/common/CoverageContent';
// import { BackgroundInformationContent } from 'dashboard-app/details/common/BackgroundInformationContent';
import MyCoverage from './sub-components/MyCoverage';
import MyHealth from './sub-components/MyHealth';
// import { PersonalInformationContent } from 'dashboard-app/details/PersonalInformation';
// import { NextOfKinContent } from 'dashboard-app/details/NextOfKin';
// import { PreExistingConditionContent } from 'dashboard-app/health/PreExistingCondition';
// import { SocialHistoryContent } from 'dashboard-app/health/SocialHistory';
// import { PhysicalActivityContent } from 'dashboard-app/health/PhysicalActivity';
// import { DisabilityContent } from 'dashboard-app/health/Disability';
import Admission from './sub-components/Admission';
import Consultation from './sub-components/Consultation';
// import Diagnosis from './sub-components/Diagnosis';
import Immunization from './sub-components/Immunization';
import Laboratory from './sub-components/Laboratory';
import Medication from './sub-components/Medication';
import Radiology from './sub-components/Radiology';
import Surgery from './sub-components/Surgery';
import AddConsultation from './sub-components/AddConsultation';
import AddAdmission from './sub-components/AddAdmission';
import AddSurgery from './sub-components/AddSurgery';
import AddRadiology from './sub-components/AddRadiology';

type TabNameType =
  | 'my_coverage'
  | 'my_detail'
  | 'my_health'
  | 'admission'
  | 'allergy'
  | 'appointment'
  | 'consultation'
  | 'diagnosis'
  | 'immunization'
  | 'laboratory'
  | 'medication'
  | 'radiology'
  | 'surgery';

export interface TabComponentProps {
  onClick: () => void;
  isCurrentTab?: boolean;
  tabName: string;
}
const TabComponent: React.FC<TabComponentProps> = ({ onClick, isCurrentTab, tabName }) => {
  return (
    <div className="tab-item" onClick={onClick}>
      <span className={isCurrentTab ? 'is-active' : ''}>{tabName}</span>
      <div className={isCurrentTab ? 'link-indicator active-indicator' : 'link-indicator'} />
    </div>
  );
};

export interface AddClaimProps {}
const AddClaim: React.FC<AddClaimProps> = () => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('my_coverage');

  const storedUserDetails = JSON.parse(sessionStorage.getItem('patientData') || '{}');
  const [userDetails] = useState<any>(storedUserDetails);

  const [claimInput, setClaimInput] = useState<ProviderClaimInput>({
    clinifyId: JSON.parse(sessionStorage.getItem('patientProfile') || '{}').clinifyId,
    coverage: userDetails.hmos.list[0] as HmoProfileInput,
    health: {
      conditions: userDetails?.defaultProfile?.preExistingCondition as PreExistingConditionInput[],
      habits: userDetails?.defaultProfile?.habit as HabitInput[],
      physicalActivities: userDetails?.defaultProfile?.physicalActivity as PhysicalActivityInput[],
      disability: userDetails?.defaultProfile?.disability as DisabilityInput[],
    },
    details: {
      personalInfo: userDetails?.defaultProfile?.personalInformation as PersonalInformationInput,
      backgroundInfo: userDetails?.defaultProfile
        ?.backgroundInformation as BackgroundInformationInput,
      nextofKin: userDetails?.defaultProfile?.nextOfKin?.[0] as NextOfKinInput,
    },
    bills: null,
    currency: 'NGN',
    grandTotal: 0,
    professionalFee: 0,
    additionNote: null,
    serviceCategory: null,
    claimType: null,
    admissions: null,
    allergies: null,
    appointments: null,
    consultations: null,
    labTests: null,
    medications: null,
    radiology: null,
    surgeries: null,
    status: null,
  });

  const handleTabClick = (tabName: TabNameType) => {
    setCurrentTab(tabName);
  };

  const setCoverageOnClaim = (coverage: any) => {
    setClaimInput({ ...claimInput, coverage });
  };

  const setDetailsOnClaim = (details: any) => {
    setClaimInput({ ...claimInput, details });
  };

  const setHealthOnClaim = (health: any) => {
    setClaimInput({ ...claimInput, health });
  };

  const handleAdditionalNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setClaimInput({ ...claimInput, additionNote: event.target.value });
  };

  return (
    <MainLayout pageName="Claim Summary">
      <Tab>
        <TabComponent
          onClick={() => handleTabClick('my_coverage')}
          isCurrentTab={currentTab === 'my_coverage'}
          tabName="My Coverage"
        />
        <TabComponent
          onClick={() => handleTabClick('my_detail')}
          isCurrentTab={currentTab === 'my_detail'}
          tabName="My Detail"
        />
        <TabComponent
          onClick={() => handleTabClick('my_health')}
          isCurrentTab={currentTab === 'my_health'}
          tabName="My Health"
        />
        <TabComponent
          onClick={() => handleTabClick('admission')}
          isCurrentTab={currentTab === 'admission'}
          tabName="Admission"
        />
        <TabComponent
          onClick={() => handleTabClick('consultation')}
          isCurrentTab={currentTab === 'consultation'}
          tabName="Consultation"
        />
        <TabComponent
          onClick={() => handleTabClick('diagnosis')}
          isCurrentTab={currentTab === 'diagnosis'}
          tabName="Diagnosis"
        />
        <TabComponent
          onClick={() => handleTabClick('immunization')}
          isCurrentTab={currentTab === 'immunization'}
          tabName="Immunization"
        />
        <TabComponent
          onClick={() => handleTabClick('laboratory')}
          isCurrentTab={currentTab === 'laboratory'}
          tabName="Laboratory"
        />
        <TabComponent
          onClick={() => handleTabClick('medication')}
          isCurrentTab={currentTab === 'medication'}
          tabName="Medication"
        />
        <TabComponent
          onClick={() => handleTabClick('radiology')}
          isCurrentTab={currentTab === 'radiology'}
          tabName="Radiology"
        />
        <TabComponent
          onClick={() => handleTabClick('surgery')}
          isCurrentTab={currentTab === 'surgery'}
          tabName="Surgery"
        />
      </Tab>

      {currentTab === 'my_coverage' && (
        <MyCoverage
          hmos={userDetails.hmos ?? []}
          setCoverageOnClaim={setCoverageOnClaim}
          isCoverageOnClaim={!!claimInput.coverage}
        />
      )}
      {currentTab === 'my_detail' && (
        <MyDetail
          personalInformation={userDetails?.defaultProfile?.personalInformation}
          backgroundInformation={userDetails?.defaultProfile?.backgroundInformation}
          nextOfKin={userDetails?.defaultProfile?.nextOfKin?.[0]}
          isPersonalInformationOnClaim={!!claimInput?.details?.personalInfo}
          isBackgroundInformationOnClaim={!!claimInput?.details?.backgroundInfo}
          isNextOfKinOnClaim={!!claimInput?.details?.nextofKin}
          setDetailsOnClaim={setDetailsOnClaim}
        />
      )}
      {currentTab === 'my_health' && (
        <MyHealth
          preExistingConditions={userDetails?.defaultProfile?.preExistingCondition}
          habits={userDetails?.defaultProfile?.habit}
          physicalActivities={userDetails?.defaultProfile?.physicalActivity}
          disabilities={userDetails?.defaultProfile?.disability}
          isPreExistingConditionsOnClaim={!!claimInput?.health?.conditions}
          isHabitsOnClaim={!!claimInput?.health?.habits}
          isPhysicalActivitiesOnClaim={!!claimInput?.health?.physicalActivities}
          isDisabilitiesOnClaim={!!claimInput?.health?.disability}
          setHealthOnClaim={setHealthOnClaim}
        />
      )}
      {currentTab === 'admission' && <Admission admissionList={userDetails?.admissions?.list} />}
      {currentTab === 'consultation' && (
        <Consultation
          consultationList={userDetails?.consultations?.list}
          onChange={() => {}}
          addToClaim={() => {}}
        />
      )}
      {/* {currentTab === 'diagnosis' && (
        <Diagnosis diagnosisList={userDetails?.diagnoses?.list} addToClaim={() => {}} />
      )} */}
      {currentTab === 'immunization' && (
        <Immunization immunizationList={userDetails?.immunizations?.list} />
      )}
      {currentTab === 'laboratory' && <Laboratory laboratoryList={userDetails?.lab_tests?.list} />}
      {currentTab === 'medication' && (
        <Medication medicationList={userDetails?.medications?.list} />
      )}
      {currentTab === 'radiology' && <Radiology radiologyList={userDetails?.radiology?.list} />}
      {currentTab === 'surgery' && <Surgery surgeryList={userDetails?.surgeries?.list} />}

      <ContentWrapper noTopPadding noMargin>
        <Content billingPage noPadding>
          <Collapsible withTitle>
            <div className="title-section">
              <div className="title">Claim Form</div>
              <div className="add-dropdown-wrapper">
                <Dropdown
                  withoutBorderRadius
                  options={NEW_ITEMS_SELECT_OPTIONS}
                  onChange={() => {}}
                  placeholder="Add New"
                  filled
                  withoutIcon={false}
                  isNavbar
                  forSearch
                />
              </div>
            </div>
          </Collapsible>
          {claimInput.coverage && (
            <ContentCollapsibleComponent
              name="Coverage Information"
              withTitle
              removeItem={() => {
                setCoverageOnClaim(null);
              }}
            >
              <Base>{/* <CoverageContent hmo={userDetails?.hmos?.list?.[0]} /> */}</Base>
            </ContentCollapsibleComponent>
          )}
          <>
            {claimInput.details?.personalInfo && (
              <ContentCollapsibleComponent
                name="Personal Information"
                removeItem={() => {
                  const { details } = claimInput;
                  setDetailsOnClaim({ ...details, personalInfo: null });
                }}
              >
                <Base>{/* <PersonalInformationContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
            {claimInput.details?.backgroundInfo && (
              <ContentCollapsibleComponent
                name="Background Information"
                removeItem={() => {
                  const { details } = claimInput;
                  setDetailsOnClaim({ ...details, backgroundInfo: null });
                }}
              >
                <Base>
                  {/* <BackgroundInformationContent
                    backgroundInformation={userDetails?.defaultProfile.backgroundInformation}
                  /> */}
                </Base>
              </ContentCollapsibleComponent>
            )}
            {claimInput.details?.nextofKin && (
              <ContentCollapsibleComponent
                name="Next Of Kin"
                removeItem={() => {
                  const { details } = claimInput;
                  setDetailsOnClaim({ ...details, nextofKin: null });
                }}
              >
                <Base>{/* <NextOfKinContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
          </>

          <>
            {claimInput.health?.conditions && (
              <ContentCollapsibleComponent
                name="Pre-Existing Condition"
                removeItem={() => {
                  const { health } = claimInput;
                  setHealthOnClaim({ ...health, conditions: null });
                }}
              >
                <Base>{/* <PreExistingConditionContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
            {claimInput.health?.habits && (
              <ContentCollapsibleComponent
                name="Habits"
                removeItem={() => {
                  const { health } = claimInput;
                  setHealthOnClaim({ ...health, habits: null });
                }}
              >
                <Base>{/* <SocialHistoryContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
            {claimInput.health?.physicalActivities && (
              <ContentCollapsibleComponent
                name="Physical Activities"
                removeItem={() => {
                  const { health } = claimInput;
                  setHealthOnClaim({ ...health, physicalActivities: null });
                }}
              >
                <Base>{/* <PhysicalActivityContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
            {claimInput.health?.disability && (
              <ContentCollapsibleComponent
                name="Disabilities"
                removeItem={() => {
                  const { health } = claimInput;
                  setHealthOnClaim({ ...health, disability: null });
                }}
              >
                <Base>{/* <DisabilityContent /> */}</Base>
              </ContentCollapsibleComponent>
            )}
          </>

          <AddAdmission />
          <AddConsultation />
          <AddRadiology />
          <AddSurgery />

          <SumTotalWrapper>
            <div className="content-left">
              <span>Professional Fee</span>
              <TextInput
                name="ProfessionalFee"
                value={`NGN ${claimInput.professionalFee}`}
                placeholder=""
              />
            </div>
            <div className="content-right">
              <span>Grand Total</span>
              <TextInput name="GrandTotal" value={`NGN ${claimInput.grandTotal}`} placeholder="" />
            </div>
          </SumTotalWrapper>
          <Base>
            <InputRow>
              <SelectWrapper fullWidth>
                <TextArea
                  name="additionalNote"
                  label="Additional Note"
                  fullWidth
                  onChange={handleAdditionalNoteChange}
                  value={claimInput.additionNote ?? undefined}
                />
              </SelectWrapper>
            </InputRow>
          </Base>
        </Content>
      </ContentWrapper>
    </MainLayout>
  );
};

export default AddClaim;
