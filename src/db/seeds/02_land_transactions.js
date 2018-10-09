const table = 'land_transactions'
exports.seed = knex => {
  return knex(table).insert([
    {
      id: 100001,
      property_id: 1,
      document_date: "2016-02-22",
      recording_date: "2016-02-22",
      document_type: "Cancellation of Notice of Default and Election To Sell Under Mortgage",
      title_company: "Security Title",
      instrument_number: 889628,
      fy_number: "024 FY77_",
      cnmi_file_number: "15-0162",
      lcdn: 16706,
      book: 9,
      page: 52,
      amount: 280.00,
      recording_fees: 280.00,
      land_tax: 280.00,
      building_tax: 280.00,
      land_appraised_value: 280.00,
      building_appraised_value: 280.00,
      remarks: "Nature of Tax: GRT Account No: 200300358 Taxable Period: 1/2013; 2/2013; 3/2013; 5/2013; 6/2013; 7/2013; 8/2013; 9/2013; 10/2013; 11/2013; 12/2013; 1/2014; 2/2014; 3/2014; 4/2014; 5/2014; 6/2014; 4/2013 Assessment Date: 8/14/2014; 11/04/2015 Amt Of Assessment: 5482.52 Lien NO: 160200039",
      source_db: "4DGUM"
    },
    {
      id: 100002,
      property_id: 2,
      document_date: "2017-02-22",
      recording_date: "2017-02-22",
      document_type: "Quit Claim Deed",
      title_company: "Security Title",
      instrument_number: 5555555,
      book: 9,
      page: 52,
      amount: 55.00,
      recording_fees: 55.00,
      land_tax: 55.00,
      building_tax: 55.00,
      land_appraised_value: 55.00,
      building_appraised_value: 55.00,
      remarks: "Property is in default.",
      source_db: "4DGUM"
    },
    {
      id: 100003,
      property_id: 3,
      document_date: "2017-03-22",
      recording_date: "2017-03-22",
      document_type: "Notice of Eviction",
      title_company: "Title Gaurantee",
      instrument_number: 222222,
      fy_number: "055 FY99_",
      cnmi_file_number: "17-0166",
      lcdn: 12345,
      book: 3,
      page: 9,
      amount: 10.00,
      recording_fees: 10.00,
      land_tax: 10.00,
      building_tax: 10.00,
      land_appraised_value: 10.00,
      building_appraised_value: 10.00,
      remarks: "Nature of Tax: GRT Account No: 200300358",
      source_db: "4DSPN"
    },
    {
      id: 100004,
      property_id: 1,
      document_date: "2016-02-22",
      recording_date: "2016-02-22",
      document_type: "Deed",
      title_company: "Security Title",
      instrument_number: 889628,
      fy_number: "024 FY77_",
      cnmi_file_number: "15-0162",
      lcdn: 16706,
      book: 9,
      page: 52,
      amount: 280.00,
      recording_fees: 280.00,
      land_tax: 280.00,
      building_tax: 280.00,
      land_appraised_value: 280.00,
      building_appraised_value: 280.00,
      remarks: "Nature of Tax: GRT Account No: 200300358 Taxable Period: 1/2013; 2/2013; 3/2013; 5/2013; 6/2013; 7/2013; 8/2013; 9/2013; 10/2013; 11/2013; 12/2013; 1/2014; 2/2014; 3/2014; 4/2014; 5/2014; 6/2014; 4/2013 Assessment Date: 8/14/2014; 11/04/2015 Amt Of Assessment: 5482.52 Lien NO: 160200039",
      source_db: "4DGUM"
    },
    {
      id: 100005,
      property_id: 1,
      document_date: "2002-05-23",
      recording_date: "2002-05-23",
      document_type: "Deed",
      title_company: "Security Title",
      instrument_number: 889628,
      lcdn: 16706,
      book: 9,
      page: 52,
      amount: 280.00,
      recording_fees: 280.00,
      remarks: "",
      source_db: "4DGUM"
    },
    {
      id: 100006,
      property_id: 1,
      document_date: "1966-01-10",
      recording_date: "1966-01-10",
      document_type: "Deed",
      title_company: "Security Title",
      instrument_number: 889628,
      lcdn: 16706,
      book: 9,
      page: 52,
      amount: 280.00,
      recording_fees: 280.00,
      remarks: "",
      source_db: "4DGUM"
    },
    {
      id: 100007,
      property_id: 1,
      document_date: "1998-01-10",
      recording_date: "1998-01-10",
      document_type: "Amended Grant of Easement and Access"
    },
    {
      id: 100008,
      property_id: 1,
      document_date: "2008-01-10",
      recording_date: "2008-01-10",
      document_type: "Tax Lien"
    },
    {
      id: 100009,
      property_id: 1,
      document_date: "2008-01-10",
      recording_date: "2008-01-10",
      document_type: "Notice of Levy"
    },
    {
      id: 100010,
      property_id: 1,
      document_date: "2017-01-10",
      recording_date: "2017-01-10",
      document_type: "Lis Pendens"
    },
    {
      id: 100011,
      document_date: "2018-01-5",
      recording_date: "2018-01-5",
      document_type: "Certificate of Death"
    },
    {
      id: 100012,
      property_id: 2,
      document_date: "1970-01-5",
      recording_date: "1970-01-5",
      document_type: "Deed"
    },{
      id: 100013,
      property_id: 2,
      document_date: "1971-01-5",
      recording_date: "1971-01-5",
      document_type: "Deed"
    },{
      id: 100014,
      property_id: 2,
      document_date: "1971-01-5",
      recording_date: "1971-01-5",
      document_type: "Deed"
    },{
      id: 100015,
      property_id: 2,
      document_date: "1972-01-5",
      recording_date: "1972-01-5",
      document_type: "Deed"
    },{
      id: 100016,
      property_id: 2,
      document_date: "1995-01-5",
      recording_date: "1995-01-5",
      document_type: "Deed"
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`)
  });
};
