
<h1 align="center">JOBful-API</h1>
<h4 align="center">A RESTful API to fetch latest job notifications(INDIA only) from various sources.</h4>

#### Fetches various job and exam notifications from popular websites and sereve them as json

### Examples:
1. <h4 style="color:tomato;">freejobalerts.com Latest Notifications</h4>
```http
GET http://localhost:3000/freejobalert/
```
#### Returns:
```json
[
    {"title":"BECIL 1028 Skilled & Unskilled Manpower Walk in","link":"http://www.freejobalert.com/becil/25475/"},{"title":"Territorial Army Officer Online Form","link":"http://www.freejobalert.com/indian-army-territorial-army/99486/"},
    {"title":"RRB Paramedical Staff - 13 Lab Superintendent Vacancies Withdrawn","link":"http://www.freejobalert.com/rrb-paramedical/771840/"},
    {"title":"NVS 370 PGT, TGT & FCSA Notification","link":"http://www.freejobalert.com/navodaya-vidyalaya/1785/"},
    {"title":"SAIL Management Trainee through GATE 2019 Online Form","link":"http://www.freejobalert.com/sail/17043/"},
    {"title":"Indian Air Force AFCAT (02/2019) Online Form","link":"http://www.freejobalert.com/afcat/62751/"},
    {"title":"Coast Guard Assistant Commandant- 01/2020 Batch Online Link Available"}
]
```
2. <h4 style="color:tomato;">All govt. exams</h4>

```http
GET http://localhost:3000/freejobalert/gov/other-all-india-exam
```
### Returns:
```json
[
    {"postDate":"27/05/2019","postBoard":"BECIL","postName":"Skilled & Unskilled Manpower  – 1028 Posts","qualification":"8th Class, ITI/ Diploma (Electrical)","advtNo":"001/2019","lastDate":"28 to 30-05-2019 – Walk in","link":"http://www.freejobalert.com/becil/25475/"},
    {"postDate":"27/05/2019","postBoard":"IIT, Kharagpur","postName":"Job Assisant  – 5 Posts","qualification":"Degree","advtNo":"-","lastDate":"17-06-2019","link":"http://www.iitkgp.ac.in/temporary-jobs"},
    {"postDate":"27/05/2019","postBoard":"NVS, Pune","postName":"TGT, PGT & Faculty Cum System Administrator  – 370 Posts","qualification":"DCA, Degree, PG (Relevant Discipline)","advtNo":"-","lastDate":"05-06-2019","link":"http://www.freejobalert.com/navodaya-vidyalaya/1785/#TGT"},
    {"postDate":"27/05/2019","postBoard":"BECIL","postName":"Skilled & Unskilled Manpower  – 1028 Posts","qualification":"8th Class, ITI/ Diploma (Electrical)","advtNo":"001/2019","lastDate":"28 to 30-05-2019 – Walk in","link":"http://www.freejobalert.com/becil/25475/"},
    {"postDate":"27/05/2019","postBoard":"IIT, Kharagpur","postName":"Job Assisant  – 5 Posts","qualification":"Degree","advtNo":"-","lastDate":"17-06-2019","link":"http://www.iitkgp.ac.in/temporary-jobs"},
    {"postDate":"27/05/2019","postBoard":"NVS, Pune","postName":"TGT, PGT & Faculty Cum System Administrator  – 370 Posts","qualification":"DCA, Degree, PG (Relevant Discipline)","advtNo":"-","lastDate":"05-06-2019","link":"http://www.freejobalert.com/navodaya-vidyalaya/1785/#TGT"},{"postDate":"25/05/2019","postBoard":"MECON Limited","postName":"Executive, Accountant, Jr Executive & Other  – 205 Posts","qualification":"Diploma, Degreee, PG (Relevant Discipline), CA/ CMA","advtNo":"-","lastDate":"20-06-2019","link":"https://img.freejobalert.com/uploads/2019/05/Notification-MECON-Limited-Executive-Accountant-Jr-Executive-Other-Posts.pdf"},
    {"postDate":"25/05/2019","postBoard":"NARI","postName":"Research Asst  – 8 Posts","qualification":"Degree/ PG (Relevant Discipline)","advtNo":"-","lastDate":"29-05 & 12-06-2019 – Walk in","link":"http://www.gsacsonline.org/images/News/RA_MH_GJ.pdf"},{"postDate":"25/05/2019","postBoard":"National Institute for Locomotor Disabilities","postName":"Staff Nurse, Hindi Translator, Professional Trainee  – 10 Posts","qualification":"Diploma (GNM), PG Degree/ Diploma (Relevant Discipline)","advtNo":"-","lastDate":"03-06-2019 – Walk in","link":"http://www.niohkol.nic.in/whatsnew/EMPLOYMENT%20NOTICE%20FOR%20WALK%20IN%20INTERVIEW%20on%2003-06-2019.pdf"},
    {"postDate":"25/05/2019","postBoard":"National Institute for Locomotor Disabilities","postName":"Project Coordinator,  Field Worker, Programme Asst, Clinical Tutor  – 5 Posts","qualification":"10th Class, Any Degree, PG","advtNo":"-","lastDate":"04-06-2019 – Walk in","link":"http://www.niohkol.nic.in/whatsnew/EMPLOYMENT%20NOTICE%20CBR%20PROJECT%20FOR%20WALK-IN-INTERVIEW%20on%20%2004-06-2019.pdf"},
    {"postDate":"25/05/2019","postBoard":"IICB","postName":"JRF  – 58 Posts","qualification":"M.Sc with NET-JRF","advtNo":"-","lastDate":"03-06-2019 – Walk in","link":"http://www.career.iicb.res.in/Recruitment%20Notice.php"},
    {"postDate":"25/05/2019","postBoard":"ESIC Hospital, Bareilly","postName":"Full Time Specialist/ Part Time Specialist, Senior Resident  – 19 Posts","qualification":"MBBS, PG Degree/ Diploma (Relevant Discipline)","advtNo":"-","lastDate":"31-05-2019 – Walk in","link":"https://www.esic.nic.in/attachments/recruitmentfile/32e92addf5b3e826af39b2f988994af4.pdf"},
    {"postDate":"26/04/2019","postBoard":"HMT Machine Tools Ltd","postName":"Joint General Manager, Dy General Manager, MO & Other  – 38 Posts","qualification":"Degree (Engg), MBBS, MBA, PGDM, CA/ CMA/ ICWA","advtNo":"22/2019-20","lastDate":"14-05-19 Extended to 31-05-19","link":"http://www.freejobalert.com/hmt-machine-tools-ltd/17916/"},{"postDate":"25/04/2019","postBoard":"Geological Survey of India","postName":"Ordinary Grade Driver  – 37 Posts","qualification":"10th Class","advtNo":"-","lastDate":"26-06-2019","link":"https://img.freejobalert.com/uploads/2019/04/Notification-Geological-Survey-of-India-Driver-Posts.pdf"}
]
```
<h1 align="left"> Usage</h1>

### Install :innocent:
```bash
npm install
```
### Run :cool:
```bash
npm start
```
### Run As Developer :sunglasses:
```bash
npm run devrun
```
### Dependencies :wrench:
<!-- ### Developer Dependencies
- nodemon 

### Dependencies
- Express
- Signale
- Jest
- Request
- Cheerio
- Dotenv -->
```json
"dependencies": {
    "cheerio": "^1.0.0-rc.3",
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "jest": "^24.8.0",
    "request": "^2.88.0",
    "signale": "^1.4.0"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
```

## State Map For Query :india:

<!-- <table>
<tbody>
<tr align="center">
<td align="center">AN</td>
<td align="center">Andaman and Nicobar Islands</td>
</tr>
<tr align="center">
<td align="center">AP</td>
<td align="center">Andhra Pradesh</td>
</tr>
<tr align="center">
<td align="center">AR</td>
<td align="center">Arunachal Pradesh</td>
</tr>
<tr align="center">
<td align="center">AS</td>
<td align="center">Assam</td>
</tr>
<tr align="center">
<td align="center">BR</td>
<td align="center">Bihar</td>
</tr>
<tr align="center">
<td align="center">CG</td>
<td align="center">Chandigarh</td>
</tr>
<tr align="center">
<td align="center">CH</td>
<td align="center">Chhattisgarh</td>
</tr>
<tr align="center">
<td align="center">DH</td>
<td align="center">Dadra and Nagar Haveli</td>
</tr>
<tr align="center">
<td align="center">DD</td>
<td align="center">Daman and Diu</td>
</tr>
<tr align="center">
<td align="center">DL</td>
<td align="center">Delhi</td>
</tr>
<tr align="center">
<td align="center">GA</td>
<td align="center">Goa</td>
</tr>
<tr align="center">
<td align="center">GJ</td>
<td align="center">Gujarat</td>
</tr>
<tr align="center">
<td align="center">HR</td>
<td align="center">Haryana</td>
</tr>
<tr align="center">
<td align="center">HP</td>
<td align="center">Himachal Pradesh</td>
</tr>
<tr align="center">
<td align="center">JK</td>
<td align="center">Jammu and Kashmir</td>
</tr>
<tr align="center">
<td align="center">JH</td>
<td align="center">Jharkhand</td>
</tr>
<tr align="center">
<td align="center">KA</td>
<td align="center">Karnataka</td>
</tr>
<tr align="center">
<td align="center">KL</td>
<td align="center">Kerala</td>
</tr>
<tr align="center">
<td align="center">LD</td>
<td align="center">Lakshadweep</td>
</tr>
<tr align="center">
<td align="center">MP</td>
<td align="center">Madhya Pradesh</td>
</tr>
<tr align="center">
<td align="center">MH</td>
<td align="center">Maharashtra</td>
</tr>
<tr align="center">
<td align="center">MN</td>
<td align="center">Manipur</td>
</tr>
<tr align="center">
<td align="center">ML</td>
<td align="center">Meghalaya</td>
</tr>
<tr align="center">
<td align="center">MZ</td>
<td align="center">Mizoram</td>
</tr>
<tr align="center">
<td align="center">NL</td>
<td align="center">Nagaland</td>
</tr>
<tr align="center">
<td align="center">OR</td>
<td align="center">Odisha</td>
</tr>
<tr align="center">
<td align="center">PY</td>
<td align="center">Puducherry</td>
</tr>
<tr align="center">
<td align="center">PB</td>
<td align="center">Punjab</td>
</tr>
<tr align="center">
<td align="center">RJ</td>
<td align="center">Rajasthan</td>
</tr>
<tr align="center">
<td align="center">SK</td>
<td align="center">Sikkim</td>
</tr>
<tr align="center">
<td align="center">TN</td>
<td align="center">Tamil Nadu</td>
</tr>
<tr align="center">
<td align="center">TS</td>
<td align="center">Telangana</td>
</tr>
<tr align="center">
<td align="center">TR</td>
<td align="center">Tripura</td>
</tr>
<tr align="center">
<td align="center">UK</td>
<td align="center">Uttarakhand</td>
</tr>
<tr align="center">
<td align="center">UP</td>
<td align="center">Uttar Pradesh</td>
</tr>
<tr align="center">
<td align="center">WB</td>
<td align="center">West Bengal</td>
</tr>
</tbody></table> -->








<!DOCTYPE html>
<html>
	<head>
		<meta charset='UTF-8'>
			<title>JSON To HTML using codebeautify.org</title>
		</head>
		<body>
			<table >
				<thead>
					<tr>
						<th>code</th>
						<th>name</th>
						<th>link</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>AN</td>
						<td>Andaman and Nicobar Islands</td>
						<td>http://www.freejobalert.com/an-government-jobs/</td>
					</tr>
					<tr>
						<td>AP</td>
						<td>Andhra Pradesh</td>
						<td>http://www.freejobalert.com/ap-government-jobs/</td>
					</tr>
					<tr>
						<td>AR</td>
						<td>Arunachal Pradesh</td>
						<td>http://www.freejobalert.com/arunachal-pradesh-government-jobs/</td>
					</tr>
					<tr>
						<td>AS</td>
						<td>Assam</td>
						<td>http://www.freejobalert.com/assam-government-jobs/</td>
					</tr>
					<tr>
						<td>BR</td>
						<td>Bihar</td>
						<td>http://www.freejobalert.com/bihar-government-jobs/</td>
					</tr>
					<tr>
						<td>CG</td>
						<td>Chandigarh</td>
						<td>http://www.freejobalert.com/chandigarh-government-jobs/</td>
					</tr>
					<tr>
						<td>CH</td>
						<td>Chhattisgarh</td>
						<td>http://www.freejobalert.com/chhattisgarh-government-jobs/</td>
					</tr>
					<tr>
						<td>DH</td>
						<td>Dadra and Nagar Haveli</td>
						<td>http://www.freejobalert.com/dadra-nagar-haveli-government-jobs/</td>
					</tr>
					<tr>
						<td>DD</td>
						<td>Daman and Diu</td>
						<td>http://www.freejobalert.com/daman-diu-government-jobs/</td>
					</tr>
					<tr>
						<td>DL</td>
						<td>Delhi</td>
						<td>http://www.freejobalert.com/delhi-government-jobs/</td>
					</tr>
					<tr>
						<td>GA</td>
						<td>Goa</td>
						<td>http://www.freejobalert.com/goa-government-jobs/</td>
					</tr>
					<tr>
						<td>GJ</td>
						<td>Gujarat</td>
						<td>http://www.freejobalert.com/gujarat-government-jobs/</td>
					</tr>
					<tr>
						<td>HR</td>
						<td>Haryana</td>
						<td>http://www.freejobalert.com/haryana-government-jobs/</td>
					</tr>
					<tr>
						<td>HP</td>
						<td>Himachal Pradesh</td>
						<td>http://www.freejobalert.com/hp-government-jobs/</td>
					</tr>
					<tr>
						<td>JK</td>
						<td>Jammu and Kashmir</td>
						<td>http://www.freejobalert.com/jk-government-jobs/</td>
					</tr>
					<tr>
						<td>JH</td>
						<td>Jharkhand</td>
						<td>http://www.freejobalert.com/jharkhand-government-jobs/</td>
					</tr>
					<tr>
						<td>KA</td>
						<td>Karnataka</td>
						<td>http://www.freejobalert.com/karnataka-government-jobs/</td>
					</tr>
					<tr>
						<td>KL</td>
						<td>Kerala</td>
						<td>http://www.freejobalert.com/kerala-government-jobs/</td>
					</tr>
					<tr>
						<td>LD</td>
						<td>Lakshadweep</td>
						<td>http://www.freejobalert.com/lakshadweep-government-jobs/</td>
					</tr>
					<tr>
						<td>MP</td>
						<td>Madhya Pradesh</td>
						<td>http://www.freejobalert.com/mp-government-jobs/</td>
					</tr>
					<tr>
						<td>MH</td>
						<td>Maharashtra</td>
						<td>http://www.freejobalert.com/maharashtra-government-jobs/</td>
					</tr>
					<tr>
						<td>MN</td>
						<td>Manipur</td>
						<td>http://www.freejobalert.com/manipur-government-jobs/</td>
					</tr>
					<tr>
						<td>ML</td>
						<td>Meghalaya</td>
						<td>http://www.freejobalert.com/meghalaya-government-jobs/</td>
					</tr>
					<tr>
						<td>MZ</td>
						<td>Mizoram</td>
						<td>http://www.freejobalert.com/mizoram-government-jobs/</td>
					</tr>
					<tr>
						<td>NL</td>
						<td>Nagaland</td>
						<td>http://www.freejobalert.com/nagaland-government-jobs/</td>
					</tr>
					<tr>
						<td>OR</td>
						<td>Odisha</td>
						<td>http://www.freejobalert.com/odisha-government-jobs/</td>
					</tr>
					<tr>
						<td>PY</td>
						<td>Puducherry</td>
						<td>http://www.freejobalert.com/puduchhery-government-jobs/</td>
					</tr>
					<tr>
						<td>PB</td>
						<td>Punjab</td>
						<td>http://www.freejobalert.com/punjab-government-jobs/</td>
					</tr>
					<tr>
						<td>RJ</td>
						<td>Rajasthan</td>
						<td>http://www.freejobalert.com/rajasthan-government-jobs/</td>
					</tr>
					<tr>
						<td>SK</td>
						<td>Sikkim</td>
						<td>http://www.freejobalert.com/sikkim-government-jobs/</td>
					</tr>
					<tr>
						<td>TN</td>
						<td>Tamil Nadu</td>
						<td>http://www.freejobalert.com/tn-government-jobs/</td>
					</tr>
					<tr>
						<td>TS</td>
						<td>Telangana</td>
						<td>http://www.freejobalert.com/telangana-government-jobs/</td>
					</tr>
					<tr>
						<td>TR</td>
						<td>Tripura</td>
						<td>http://www.freejobalert.com/tripura-government-jobs/</td>
					</tr>
					<tr>
						<td>UK</td>
						<td>Uttarakhand</td>
						<td>http://www.freejobalert.com/uttarakhand-government-jobs/</td>
					</tr>
					<tr>
						<td>UP</td>
						<td>Uttar Pradesh</td>
						<td>http://www.freejobalert.com/up-government-jobs/</td>
					</tr>
					<tr>
						<td>WB</td>
						<td>West Bengal</td>
						<td>http://www.freejobalert.com/wb-government-jobs/</td>
					</tr>
					<tr>
						<td></td>
						<td>&nbsp</td>
						<td>&nbsp</td>
					</tr>
				</tbody>
			</table>
		</body>
	</html>








## Sources:
- <a href="www.freejobalert.com"> freejobalert.com</a>
- More coming Soon :blush:

### Developer Hacks
1. install vsCode and install <a href="https://github.com/Huachao/vscode-restclient/"> REST Client Extension </a>
2. open the test.rest file and send request directly from vsCode :boom:

## License
MIT License

Copyright (c) 2019 dipankar pal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

  
