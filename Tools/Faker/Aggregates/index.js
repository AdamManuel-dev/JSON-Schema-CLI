// function getRecordWrapper () {}

const _ = require('lodash')

// All Jose's Accounts
const users = [
  '01d6a26c-d3f1-465c-b3ff-c0184f5e8ce0',
  '580f7bac-8786-469b-9537-7cdfdf52b8fc',
  '710c4e1f-f141-4e4d-8966-50574a6b1ad5'
]

function randomNumber (underX) {
  let double = Math.random() * 50 + 1
  return Number.parseInt(double.toString(), 10)
}

function getTypeRandom (type, statuses) {
  let temp = {}
  temp[type] = {
    count: 0,
    ids: []
  }
  statuses.forEach(_status => {
    let tempNumber = randomNumber()
    temp[type].count += tempNumber
    temp[type] = {
      ...temp[type],
      [_status]: {
        count: tempNumber,
        ids: []
      }
    }
  })
  return temp
}

const today = 18358

const pastXDays = 30

function getDays (lastX) {
  let days = []
  for (let index = today - lastX; index < today; index++) {
    days.push(index)
    if (index === pastXDays.length - (lastX + 1)) {
      return days
    }
  }
  return days
}

function getBaseRecord (userId, UnixDay) {
  return {
    id: `${userId}|${UnixDay - randomNumber(25)}`,
    type: 'Aggregate',
    user: userId,
    updateBy: userId,
    updatedOn: UnixDay,
    createBy: userId,
    createOn: 1569382106,
    _partitionKey: 'Aggregate'
  }
}

async function run () {
  let daysWithUsers = getDays(pastXDays).map(day => {
    return users.map(user => {
      return getBaseRecord(user, day)
    })
  })
  const flatDays = _.flatten(daysWithUsers)
  const updated = flatDays.map(_day => {
    return {
      ..._day,
      // ...getTypeRandom('Product', ['NEW', 'UPDATE', 'ACTIVE', 'COLD']),
      // ...getTypeRandom('Interest', ['NEW', 'UPDATE', 'ACTIVE', 'COLD']),
      ...getTypeRandom('Residence', [
        'NEW',
        'RECENTLY_UPDATE',
        'ACTIVE',
        'COLD',
        'INACTIVE'
      ]),
      ...getTypeRandom('Message', ['NEW', 'DRAFT', 'VIEWED', 'ARCHIVED']),
      ...getTypeRandom('Task', ['NEW', 'UPDATE', 'ACTIVE', 'COLD']),
      ...getTypeRandom('Payment', [
        'PAYMENT_PENDING',
        'PAYMENT_APPROVED',
        'PAYMENT_DENIED'
      ]),
      ...getTypeRandom('Job', [
        'IN_PROGRESS',
        'PROBLEM',
        'COMPLETE',
        'ON_HOLD',
        'FINANCE_REJECT_OR_CUSTOMER_CANCEL'
      ]),
      ...getTypeRandom('Appointment', [
        'NEW',
        'TO_CONFIRM',
        'COULD_NOT_REACH',
        'CONFIRMED',
        'UNASSIGNED',
        'CALL_CANCEL',
        'EXTRA',
        'ASSIGNED',
        'ONE_LEG',
        'NO_SHOW',
        'SALE',
        'REP_TIE',
        'PITCH_MISS',
        'BLOWOUT',
        'RESCHEDULE',
        'REHASH'
      ]),
      ...getTypeRandom('Timeclock', [
        'OFF_CLOCK',
        'LATE',
        'ON_CLOCK',
        'OVERTIME',
        'VACATION',
        'SICK_LEAVE'
      ]),
      ...getTypeRandom('Timeoff', ['PENDING', 'ACCEPTED', 'REJECTED']),
      ...getTypeRandom('Route', [
        'NO_START',
        'STARTED',
        'ON_BREAK',
        'LUNCH',
        'FINISHED'
      ]),
      ...getTypeRandom('Contract', [
        'SIGNED',
        'APPROVED',
        'PENDING',
        'SENT',
        'DRAFT'
      ]),
      ...getTypeRandom('Message', ['DRAFT', 'NEW', 'VIEWED', 'ARCHIVED']),
      ...getTypeRandom('PhoneCall', [
        'REHASH',
        'REHASH_2',
        'MEDIA1',
        'CV_CALLBACK',
        'HOME_SHOWS',
        'CR1',
        'CR2',
        'PC1',
        'HS1',
        'NH1',
        'SURVEY1',
        'RS1',
        'PC2',
        'PC3',
        'PC4',
        'PC5',
        'HS2',
        'HS3',
        'HS4',
        'HS5',
        'HS6',
        'MEDIA2',
        'MEDIA3',
        'MEDIA4',
        'NH2',
        'NH3',
        'NH4',
        'SURVEY2',
        'SURVEY3',
        'SURVEY4',
        'SURVEY5',
        'SURVEY6',
        'RS2',
        'RS3',
        'RS4',
        'RH_CANCEL',
        'BLOWOUT',
        'COMPLETE',
        'RESURECTION1',
        'RESURECTION2',
        'CUSTOMER_SURVEY',
        'NOT_NET',
        'CONFIRM1'
      ]),
      ...getTypeRandom('Order', [
        'NEW_ORDER',
        'ORDER_MEASURED',
        'PURCHASE_ORDER',
        'ORDER_COMPLETE',
        'ORDER_CANCELED'
      ]),
      ...getTypeRandom('Lead', [
        'INTEREST',
        'NEW',
        'CUSTOMER',
        'RECYCLE',
        'PITCHING',
        'ORDER',
        'JOB'
      ]),
      ...getTypeRandom('EmailCampaign', [
        'NEW',
        'UPDATE',
        'ACTIVE',
        'INACTIVE',
        'COLD'
      ]),
      ...getTypeRandom('Email', [
        'SENT',
        'OPENED',
        'INACTIVE',
        'SPAM',
        'RESPONDED'
      ])
    }
  })
  // let test = getTypeRandom('User', ['New', 'Update', 'Removed'])
  console.log(JSON.stringify(updated, null, 2))
}

run()
