//> Calculating your outgoing signature:
//> Please note, you will need to decode your base64 API Key before use

const crypto = require('crypto');
// const https = require('https');
// const request = require('request'); // npm install request
// const URLSafeBase64 = require('urlsafe-base64');
// const uuid = require('uuid4'); // npm install uuid4
let apiKey = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FEd1RvYVNWOU92V0tNRlVSYTVLejc2YjlxRwpHZkJ1NnhYVjQ2VXFQVmtydERoL054WkVsZ0tiMGFNQUo5SVkxSmp6MlpETDNQL2YrSVhnYjh6U2dpTDJaSG12CmdSSDYzQktuOWJYTEtLY2NYUTFRSm1ySzB3NFpCYzBTVUFhTVdjd3VxZGVsL1dldDNWc1RYbk1zTFZxZFE2WVcKZlRRTGNoYmR3WXNTOWRLRkdRSURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=";
let timestamp = Date.now();
let partner_id = "";
let hash = crypto.createHash('sha256').update(parseInt(partner_id, 10) + ":" + timestamp).digest('hex');
let encrypted = crypto.publicEncrypt({
  key: Buffer.from(apiKey, 'base64'),
  padding: crypto.constants.RSA_PKCS1_PADDING
}, Buffer.from(hash)).toString('base64');
let signature = [encrypted, hash].join('|');

console.log('\n', timestamp, '\n', signature);