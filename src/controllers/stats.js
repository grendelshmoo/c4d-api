const model = require('../models/stats')
const moment = require('moment')

async function getStats(req, res, next) {
  try {
    const count = await model.getRecordCount()
    const max = await model.getMaxDate()
    const min = await model.getMinDate()
    const contactsCount = await model.getContactsCount()
    const propertiesCount = await model.getPropertiesCount()
    // const recordsByDate = await model.recordsByDate()

    const data = {
      record_count: count[0].count,
      max_date: max[0].max,
      min_date: min[0].min,
      contacts_count: contactsCount[0].count,
      properties_count: propertiesCount[0].count
    }

    res.status(200).json(data)
  } catch (e) {
    next({status: 400, error: 'Unable to get statistics.'})
  }
}

async function getRecordsByDate(req, res, next) {
  try {
    const resp = await model.getRecordsByDate()



    function recordsByDate(data) {

      let recordCount = {}
      for (let i of data) {
        let date = moment(i.recording_date).format("MM/DD/YY")
        if (recordCount.hasOwnProperty(date)) {
          recordCount[date] = recordCount[date] + 1
        } else {
          recordCount[date] = 1
        }
      }
      let results = []
      for (var key in recordCount) {
        if (recordCount.hasOwnProperty(key)) {
          results.push({"x": key, "y": recordCount[key] })
        }
      }
return results


    }

    const data = recordsByDate(resp)

    res.status(200).json({data})
  } catch (e) {
    next({status: 400, error: 'Unable to get statistics.'})
  }
}



async function getRecordsByMunicipality(req, res, next) {
  try {
    //recordsByMunicipality()
  } catch (e) {
    next({status: 400, error: 'Unable to get statistics.'})
  }
}

module.exports = {
  getStats,
  getRecordsByDate,
  getRecordsByMunicipality
}
