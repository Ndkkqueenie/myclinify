import Actions from 'dashboard-app/common/Actions';
import MainListView from 'dashboard-app/common/MainListView';
import { UserType } from 'graphql-types/globalTypes';
import React from 'react';

const uniqueColumns = [
  {
    Header: 'Request Date and Time',
    accessor: 'dateAndTimeSubmitted',
  },
  {
    Header: 'Requested By',
    accessor: 'requester',
  },
  {
    Header: 'Facility Name',
    accessor: 'facilityName',
  },
  {
    Header: 'Investigation Type',
    accessor: 'hmoName',
  },
  {
    Header: 'Patient Full Name',
    accessor: 'fullName',
  },
  {
    Header: 'Patient Type',
    accessor: 'patientType',
  },
];
const data = [
  {
    number: 1,
    claimType: 'Inpatient',
    serviceCategory: 'Radiology',
    dateIncurred: '12/05/20',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    requester: 'Temitayo Adenuga',
    priority: ' Urgent',
    patientType: 'Inpatient',
    facilityName: 'Radiology',
    fullName: 'Michael Omidele',
    status: 'In progress',
    hmoName: 'Integrated Healthcare Limited',
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
  {
    number: 2,
    claimType: 'Outpatient',
    serviceCategory: 'Immunization',
    dateIncurred: '12/05/20',
    patientType: 'Outpatient',
    dateAndTimeSubmitted: '12/05/20 11:54am',
    requester: 'Temitayo Adenuga',
    priority: ' Urgent',
    fullName: 'Michael Omidele',
    facilityName: 'Radiology',
    hmoName: 'Integrated Healthcare Limited',
    actions: <Actions handleDelete={() => {}} handleDuplicate={() => {}} id="" />,
    subRows: undefined,
  },
];

export interface InvestigationListProps {
  userType?: UserType;
  listPageHook?: any;
  showSearchTab?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noListPadding?: boolean;
  isOnModal?: boolean;
  selectRecord?: (id: string) => void;
  selectedRecords?: string[];
  selectedRecordType?: string;
  handleAddNew?: () => void;
  readOnly?: boolean;
}
const InvestigationList: React.FC<InvestigationListProps> = (props) => (
  <MainListView
    {...props}
    items={data}
    uniqueColumns={uniqueColumns}
    showRecordCreated={false}
    recordType="Investigations"
    actionFields="investigation"
    addNewButton={false}
    investigationDropdown
  />
);

// const InvestigationList: React.FC<InvestigationListProps> = () => {
//   React.useEffect(() => setTitle('Investigations'), []);
//   const {
//     data: {
//       appData: { isMobile },
//     },
//   } = useQuery(GET_APP_DATA);
//   const history = useHistory();
//   const {
//     location: { pathname },
//   } = history;
//   return (
//     <>
//       <SearchTab>
//         <div className="heading-table">
//           <SearchInput value="" onChange={() => {}} />
//           <div className="clinify-dropdown">
//             <Dropdown
//               noPadding
//               withoutBorderRadius
//               options={INVESTIGATION_OPTIONS}
//               onChange={() => {}}
//               placeholder="All Investigations"
//               grey
//             />
//           </div>
//           <DatePickerWrapper>
//             <DatePicker
//               placeholder="Select Date (From)"
//               type="DateOnly"
//               width="170px"
//               onChange={() => {}}
//             />
//             <DatePicker
//               placeholder="Select Date (To)"
//               maxDate={new Date()}
//               type="DateOnly"
//               width="170px"
//               onChange={() => {}}
//             />
//           </DatePickerWrapper>

//           <>
//             {isMobile ? (
//               <>
//                 <OutlineButton
//                   withBorderRadius
//                   withIcon
//                   text="Clear Filter"
//                   onClick={() => {}}
//                   mainColor={colors.darkBlue}
//                   icon={<ClearFilterIcon />}
//                   fullWidth
//                 />
//                 <OutlineButton
//                   withBorderRadius
//                   withIcon
//                   text="Archive"
//                   onClick={() => {}}
//                   mainColor={colors.darkBlue}
//                   icon={<ArchiveIcon />}
//                   fullWidth
//                 />

//                 <OutlineButton
//                   withBorderRadius
//                   withIcon
//                   text="Delete"
//                   mainColor={colors.darkBlue}
//                   onClick={() => {}}
//                   icon={<TrashIcon color={colors.darkBlue} />}
//                   deleteButton
//                   fullWidth
//                 />
//               </>
//             ) : (
//               <>
//                 <div data-tip="Clear Filter" data-for="searchTabTip">
//                   <OutlineIconButton onClick={() => {}} withIcon icon={<ClearFilterIcon />} />
//                 </div>
//                 <div data-tip="Archive" data-for="searchTabTip">
//                   <OutlineIconButton onClick={() => {}} icon={<ArchiveIcon />} />
//                 </div>

//                 <div data-tip="Delete" data-for="searchTabTip">
//                   <OutlineIconButton deleteButton onClick={() => {}} icon={<TrashIcon />} />
//                 </div>

//                 <ReactTooltip
//                   id="searchTabTip"
//                   place="top"
//                   className="button-tooltip"
//                   type="light"
//                   effect="solid"
//                 />
//               </>
//             )}
//           </>
//           <div>
//             <Button
//               text="Add New Request"
//               onClick={() => history.push(`${pathname}/add`)}
//               withIcon
//               minWidth="auto"
//               addButton
//             />
//           </div>
//         </div>
//       </SearchTab>
//       <ListContentWrapper listPage>
//         <Content noPadding listPage>
//           <Table
//             showPagination={false}
//             goToPage={() => {}}
//             columns={columns}
//             pageCount={0}
//             data={data}
//             onRowClick={() => {}}
//           />
//         </Content>
//       </ListContentWrapper>
//     </>
//   );
// };

export default InvestigationList;
