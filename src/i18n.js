import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-browser'

const messages = {
  EN: {
    message: {
      hello: 'Hello, my name is:',
      education: 'informatics engineer, multimedia technician',
      location: 'Šentjur (Celje), Slovenia',
      about: 'About me',
      back: 'MY BACKGROUND',
      intPar1: 'I am interested in working in computer science, but at the same time I have a passion for creating interactive multimedia content. I am an IT engineer and a multimedia technician. My last job was in the field of front-end development, where we created web applications with the Angular framework (see my project section of webpage). At the same time, I was also in charge of creating UX/UI solutions. In the past, I worked as an IT technician, graphic designer and radio technician.',
      intPar2: 'As an IT specialist, I worked as a technical supporter in a company, where I mainly helped users with tech support. During my education, I learned how to create new users (and assign rights to them), add and remove hardware, create backups, perform updates and install software, monitor the computer system.',
      intPar3:  'As a multimedia technician/graphic designer, I created many different online advertisements, graphic visualizations. When I worked on the radio, I also created various promotional videos and I helped create radio ads.',
      educationHeader: 'Education',
      multimediaTech: '• Multimedia technician',
      IT: 'IT engineer',
      exp: 'Experience',
      peter: '• Work in a photo studio (FotoPeter s.p.) 05/2014 to 09/2014',
      neja: '• Work for a graphic design company (Nejamedia s.p.) 04/2015 to 10/2015',
      drago: '• Help with organizing events (Drago Mackošek s.p.) 2015-2020',
      drago2: '• Part time graphic designer (Drago Mackošeks.p.) 2015-2020',
      radio: '• Technician at radio (Radio Štarjerski val d.o.o.) 04/2019 to 08/2019',
      invoice: '• Computer technician (INVOICE d.o.o.) 01/2021 to 03 2021.',
      navteh: '• Frontend developer (Navteh d.o.o.) 08/2021 to 10/2022',
      skillsInt: 'Skills and interests',
      skills: 'Skills',
      angular: '• Angular framework',
      vue: '• Some knowledge about Vue and React ',
      REST: '• Working with REST calls',
      git: '• Working with git and GitLab/GitHub',
      UX: '• Creating UI/UX solutions',
      Adobe: '• Working with Adobe Suite (Photoshop, Illustrator, Premiere, Audition, XD)',
      CompSuppport: '• IT support',
      linux: '• Work with Mac, Windows or Linux operating system',
      interests: 'Interests',
      sys: '• System administration',
      cms: '• CMS (Content Management System)',
      wordpress: '• Working with WordPress',
      projects: 'Projects',
      practical: 'A practical project for my degree',
      pro1: 'For my practical work, I created a simple static page for the fictional company named Argus. A website mostly contains HTML and CSS. Using JavaScript, I created a navigation, simple calculator, map (which displays the location of the company) and PDF viewer on the website using an external library.',
      access: 'You can access the website here',
      support: 'Customer support application',
      pro2: 'My first project in Angular was a simple web application designed to improve technical support. The user saw the customers most crucial information and various statuses. If any problem happened with the customer, the user saw certain information, which had a specific color. The information was updated every five minutes. When the user saw certain problems, he could send this information back to the server.',
      europe: 'Application for displaying vehicles in Europe',
      pro3: 'My second project in Angular was a bit more complex application, where I used the Leaflet library to display the location of individual vehicles across the Europe. The user could see where the vehicle was located and obtain specific information about that vehicle, and at the same time, he could search for a specific vehicle in which he was interested, and he could also sort the list of vehicles according to certain parameters. The user could also send certain messages to these vehicles, see the vehicle temperature, and create certain reports for the vehicles. The user could also choose between three different languages. The application was also responsive.',
      graphic: 'Graphic projects',
      contact: 'Contact:',
      phone: 'Phone: 070 346 952',
      email: 'Email: lovro.mackosek@gmail.com',
      createdBy: '© 2022 created by Lovro Mackošek'
    }
  },
  SL: {
    message: {
      hello: 'Pozdravljeni moje ime je:',
      education: 'Inženir Infromatike, medijski tehnik',
      location: 'Šentjur pri Celju',
      about: 'O meni',
      back: 'MOJE OZADJE',
      intPar1: 'Zanimam se za delo v računalništvu, hkrati pa imam tudi strast za ustvarjanje interaktivnih multimedijskih vsebin. Po izobrazbi sem inženir informatike (6. stopnja) in medijski tehnik. Moja zadnja zaposlitev je bila na področju programiranja, kjer smo ustvarjali spletne aplikacije z ogrodjem Angular (oglejte si opise mojih projektov). Hkrati pa sem bil tudi zadolžen za ustvarjanje UX/UI rešitev. V preteklosti sem pa delal kot računalniški podpornik (informatik), grafični oblikovalec in tehnik na radiju.',
      intPar2: 'Kot informatik sem opravljal delo tehničnega podpornika v podjetju, kjer sem predvsem pomagal uporabnikom, ter nameščal operacijski sisteme Windows na novih računalnikih.  V času mojega izobraževanja sem se naučil ustvarjati nove uporabnike (in jim dodeljevali pravice), dodajati in odstranjevati strojno opremo, ustvarjati varnostne kopije, posodabljati in instalirati programsko opremo, nadzorovati računalniški sistem.',
      intPar3:  'Kot medijski tenhik/grafični oblikovalec, sem pa ustvarjal veliko različnih spletnih oglasov, grafičnh podob. Ko sem delal na radiju sem tudi ustvarjal različne promocijke videje, ter pomagal ustvarjati radijske oglase.',
      educationHeader: 'Izobrazba',
      multimediaTech: '• Medijski tehnik',
      IT: 'Inženir informatike',
      exp: 'Izkušnje',
      peter: '• Delo v foto studiju (FotoPeter s.p.) 05/2014 do 09/2014',
      neja: '• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015',
      drago: '• Pomoč pri organizaciji prireditev (Drago Mackošek s.p.) 2015-2020',
      drago2: '• Občasno oblikovanje grafičnih podob (Drago Mackošeks.p.) 2015-2020',
      radio: '• Delo na radiju (Radio Štarjerski val d.o.o.) 04/2019 do 08/ 2019',
      invoice: '• Popravljanje računalnikov (INVOICE d.o.o.) 01/2021 do 03 2021.',
      navteh: '• Ustvarjanje spletnih aplikacij (Navteh d.o.o) 08/2021 do 10/2022',
      skillsInt: 'Znanja in zanimanja',
      skills: 'Znanja',
      angular: '• Ogrodje Angular',
      vue: '• Poznavanje ogrodja Vue in React (prevsem Vue)',
      REST: '• Delanje z REST klici',
      git: '• Delo z Gitom in Gitlabom/Githubom',
      UX: '• Ustvarjanje UI/UX rešitev',
      Adobe: '• Delanje z Adobe Suitom (Photoshop, Illustrator, Premiere, Audition, XD)',
      CompSuppport: '• Računalniška podpora',
      linux: '• Delo z Mac, Windows ali Linux operacijskim sistemom',
      interests: 'Zanimanja',
      sys: '• Sistemska administracija',
      cms: '• CMS (Content Management System)',
      wordpress: '• Delo z wordpressom',
      projects: 'Projekti',
      practical: 'Praktični izdelek za diplomsko delo',
      pro1: 'Moj prvi projekt v angularju je bila preprosta spletna aplikacija, ki je bila namenjena za izboljšanje tehnične podpore. Uporabnik je videl najbolj ključne informacije stranke in različne statuse. Če se je pri stranki zgodila kakšna težava, je uporabnik videl določene informacije obarvane s specifično barvo. Informacije so se posodabljale vsakih petih minut. Ko je uporabnik videl določene probleme, je lahko to informacijo nazaj poslal na strežnik.',
      access: 'Do spletne strani lahko dostopate tukaj',
      support: 'Aplikacija za podporo uporabnikom',
      pro2: 'My first project in Angular was a simple web application designed to improve technical support. The user saw the customers most crucial information and various statuses. If any problem happened with the customer, the user saw certain information, which had a specific color. The information was updated every five minutes. When the user saw certain problems, he could send this information back to the server.',
      europe: 'Aplikacija za prikazovanje vozil po Evropi',
      pro3: 'Moj drugi projekt v angularju, je bila bolj kompleksna aplikacija, kjer se uporabljala knjižnica Leaflet za prikazovanje lokacije posameznih vozil po Evropi. Uporabnik je lahko videl, kje se vozilo nahaja, ter pridobil specifične informacije o tistem vozilu, hkrati pa je v listi vozil lahko poiskal specifično vozilo, za katerega je imel interes, lahko je pa tudi sortiral listo vozil po določenih parametrih. Uporabnik je lahko tudi pošiljal določena sporočila tem vozilom, videl kakšne temperature so v tem vozilu in ustvarjal določena poročila za vozila. Uporabnik je lahko v aplikaciji tudi izbiral med tremi različnimi jeziki. Aplikacija je bila tudi prirejena za mobilno različico.',
      graphic: 'Grafični izdelki',
      contact: 'Kontakt:',
      phone: 'Telefon: 070 346 952',
      email: 'Email: lovro.mackosek@gmail.com',
      createdBy: '© 2022 ustvaril Lovro Mackošek'
    }
  }
}

const i18n = createI18n({
  locale: 'SL',
  messages,
  datetimeFormats: {
    EN: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
    SL: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
  }
})

export default i18n
