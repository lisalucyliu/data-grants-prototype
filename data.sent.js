/* Dummy data for the Sent data grants page, styled after the original wireframes. */

const SENT_GRANTS = [
  { name: "test object previous", status: "pending", expiration: "January 8, 2027", receiverAwsId: "111111111111", creation: "January 8, 2023" },
  { name: "test object success", status: "accepted", expiration: "January 8, 2027", receiverAwsId: "111111111111", creation: "January 8, 2023" },
  { name: "COVID-19 - World Confirmed Cases, Deaths, Testing", status: "pending", expiration: "December 28, 2026", receiverAwsId: "111122223333", creation: "December 28, 2022" },
  { name: "Lakeforge XML Transcripts - Sample", status: "pending", expiration: "December 28, 2026", receiverAwsId: "444455556666", creation: "December 28, 2022" },
  { name: "Made in America - US only (TRIAL VERSION)", status: "pending", expiration: "December 26, 2026", receiverAwsId: "777788889999", creation: "December 26, 2022" },
  { name: "Currency Exchange API | Lakeforge", status: "accepted", expiration: "December 26, 2026", receiverAwsId: "123456789012", creation: "December 26, 2022" },
  { name: "Wrenhollow Consulting: Cell Tower Locations - Open Database License", status: "pending", expiration: "December 26, 2026", receiverAwsId: "210987654321", creation: "December 26, 2022" },
  { name: "Lakeforge Fundamentals", status: "accepted", expiration: "November 28, 2026", receiverAwsId: "444455556666", creation: "November 28, 2022" },
  { name: "Retail Benchmark Data (Test Product)", status: "expired", expiration: "November 28, 2026", receiverAwsId: "444455556666", creation: "October 28, 2022" },
  { name: "Lakeforge Supply Chain Relationships", status: "accepted", expiration: "October 15, 2026", receiverAwsId: "444455556666", creation: "November 28, 2022" },
  { name: "Identiweave Essential Metadata for Movies/TV/OTT (Bulk Data)", status: "accepted", expiration: "August 3, 2026", receiverAwsId: "222233334444", creation: "November 28, 2022" },
  { name: "US Imports - Automated Manifest System (AMS)", status: "expired", expiration: "August 3, 2026", receiverAwsId: "555566667777", creation: "September 19, 2022" },
  { name: "US Retirement & Welfare Benefit Plans (IRS - Form 5500)", status: "expired", expiration: "August 3, 2026", receiverAwsId: "555566667777", creation: "September 19, 2022" },
  { name: "New York City Property Sales 2014-2018", status: "accepted", expiration: "August 3, 2026", receiverAwsId: "555566667777", creation: "August 3, 2022" },
  { name: "Identiweave GMV Dataset", status: "accepted", expiration: "August 3, 2026", receiverAwsId: "888899990000", creation: "August 3, 2022" },
  { name: "Parsewell Synthetic Medicare Claims - CCLF format", status: "accepted", expiration: "August 3, 2026", receiverAwsId: "333344445555", creation: "August 3, 2022" },
  { name: "Transportation Spend Data (Demo/Sample)", status: "accepted", expiration: "August 3, 2026", receiverAwsId: "555566667777", creation: "August 3, 2022" },
  { name: "Lakeforge XML Transcripts - Full History", status: "pending", expiration: "July 12, 2026", receiverAwsId: "444455556666", creation: "July 12, 2022" },
  { name: "Global Shipping Container Rates", status: "accepted", expiration: "June 30, 2026", receiverAwsId: "666677778888", creation: "June 30, 2022" },
  { name: "Consumer Sentiment Index - Weekly", status: "expired", expiration: "May 18, 2026", receiverAwsId: "777788889999", creation: "April 18, 2022" },
  { name: "Real-Time Air Quality Index API", status: "pending", expiration: "May 2, 2026", receiverAwsId: "111122223333", creation: "May 2, 2022" },
].map((row, i) => ({
  id: `grant-${i}`,
  ...row,
  statusLabel: { pending: "Pending acceptance", accepted: "Accepted", expired: "Expired" }[row.status],
  expirationSort: parseDate(row.expiration),
  creationSort: parseDate(row.creation),
}));

const JOB_SOURCE_ID = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";

const JOBS = [
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "January 8, 2023" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "January 8, 2023" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "December 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "December 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "December 26, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "December 26, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "December 26, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "November 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "October 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "November 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "November 28, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "September 19, 2022" },
  { type: "Create data grant", details: `Source data set ID: ${JOB_SOURCE_ID}`, state: "completed", created: "September 19, 2022" },
].map((row, i) => ({
  id: `job-${i}`,
  ...row,
  stateLabel: { processing: "Processing", completed: "Completed" }[row.state],
  createdSort: row.created === "Just now" ? new Date() : parseDate(row.created),
}));
