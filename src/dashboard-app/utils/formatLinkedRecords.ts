const formatLinkedRecords = (editData) => {
  const allRecordsLinkPath = [
    'admissions',
    'medications',
    'appointments',
    'vitals',
    'consultations',
    'allergies',
    'radiology',
    'surgeries',
    'immunizations',
    'labTests',
  ];

  allRecordsLinkPath.forEach((record) => {
    const recordIsLinked = Array.isArray(editData[record]);
    if (recordIsLinked) {
      const linkedRecordIds = editData[record].map(({ id }) => id);
      editData[record] = linkedRecordIds;
    }
  });
};

export default formatLinkedRecords;
