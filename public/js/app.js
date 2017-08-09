  "use strict";

  class App{
    constructor(){
      this.form = [
      {
        "id":1,
        "name" : "Maize/Corn",
        "description" : "It is also known as corn, is a large grain plant first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. Maize has become a staple food in many parts of the world, with total production surpassing that of wheat or rice. However, not all of this maize is consumed directly by humans. Some of the maize production is used for corn ethanol, animal feed and other maize products, such as corn starch and corn syrup. The six major types of corn are dent corn, flint corn, pod corn, popcorn, flour corn, and sweet corn. The planting periods of corn in the Philippines are from April-May and September-October. The harvesting periods are from July-August and December-January.",
        "image" : "img/corn.jpg",   
      },
      {
        "id":2,
        "name" : "Rice",
        "description" : " Rice is the seed of the grass species Oryza sativa (Asian rice) or Oryza glaberrima (African rice). As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia. It is the agricultural commodity with the third-highest worldwide production. Rice, a monocot, is normally grown as an annual plant. Rice cultivation is well-suited to countries and regions with low labor costs and high rainfall, as it is labor-intensive to cultivate and requires ample water. The planting periods of rice are from May-June and November-December. The harvesting periods are from March-April and September-October.",
        "image" : "img/rice.jpg",
      },
      {
        "id":3,
        "name" : "Coconut Tree",
        "description" : "The coconut tree (Cocos nucifera) is a member of the family Arecaceae (palm family) and the only species of the genus Cocos.The term coconut can refer to the whole coconut palm or the seed, or the fruit, which, botanically, is a drupe, not a nut. oconuts are known for their great versatility, as evidenced by many traditional uses, ranging from food to cosmetics.[4] They form a regular part of the diets of many people in the tropics and subtropics. The best planting period of coconut trees are from May with the onset of pre-monsoon rain. Coconuts are harvested at varying spans in a year. Coconuts mature for about 12 months. ",
        "image" : "img/coconut.jpg",
      },
      {
        "id":4,
        "name" : "Sugarcane",
        "description" : "Sugarcane, or sugar cane, are several species of tall perennial true grasses of the genus Saccharum, tribe Andropogoneae, native to the warm temperate to tropical regions of South Asia and Melanesia, and used for sugar production. The world demand for sugar is the primary driver of sugarcane agriculture. Sugarcane predominantly grows in the tropical and subtropical regions. A sugarcane crop is sensitive to the climate, soil type, irrigation, fertilizers, insects, disease control, varieties, and the harvest period. The planting periods of sugarcane are from October to May. The harvesting periods are from April to October.",
        "image" : "img/sugarcane.jpg",
      },
      {
        "id":5,
        "name" : "Lakatan Banana Tree",
        "description" : "Lakatan bananas, also spelled Lacatan, are diploid banana cultivars from the Philippines. It is one of the most common banana cultivars in the Philippines, along with the Latundan and Saba bananas. Lakatan is the most popular dessert banana in the Philippines. It is more expensive than the more common Latundan and Cavendish bananas. Both Latundan and Lakatan, however, are preferred by Filipinos over Cavendish. They have higher β-Carotene content than other banana cultivars. Lakatan typically grow to a height of five to nine feet. The fruits can be harvested 8 to 12 months after planting.   ",
        "image" : "img/banana.jpg",
      },
      {

        "id":6,
        "name" : "Cassava Tree",
        "description" : "Cassava is a nutty-flavored, starchy root vegetable or tuber. Native to South America, it's a major source of calories and carbs for people in developing countries. It is grown in tropical regions of the world because of its ability to withstand difficult growing conditions — in fact, it's one of the most drought-tolerant crops. Additionally, cassava root is well known as the raw material that's used to produce tapioca and garri, a product similar to tapioca. Cassava may be planted at any season, but it is better if the soil is always wet in the first 4-5 weeks after planting. ",
        "image" : "img/cassava.jpg",
      },
      {

        "id":7,
        "name" : "Pineapple Tree",
        "description" : "The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the Bromeliaceae family. Pineapples may be cultivated from a crown cutting of the fruit, possibly flowering in 5–10 months and fruiting in the following six months. Pineapples do not ripen significantly after harvest. Once rooted and planted, suckers will flower and produce fruit in 12 months. Rooted crowns will take 18 months to form fruit. For Hawaiian pineapples, the main fruiting season is from April to May. Pineapples grown in the Caribbean have two fruiting seasons, December through February and August through September. ",
        "image" : "img/pineapple.jpg",
      },
      {
        "id": 8,
        "name" : "Mango Tree",
        "description" : "Mangoes are juicy stone fruit (drupe) from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. The majority of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae. Mangoes are native to South Asia, from where the 'common mango' or 'Indian mango', Mangifera indica, has been distributed worldwide to become one of the most widely cultivated fruits in the tropics. Other Mangifera species (e.g. horse mango, Mangifera foetida) are also grown on a more localized basis. Mangoes are biennial bearer, fruits every two years.",
        "image" : "img/mango.jpg",
      },
      { "id":7,
        "name" : "Durian Tree",
        "description" : "Durian is the fruit of several tree species belonging to the genus Durio. The name 'durian' is derived from the Malay languages word for duri or 'spike', a reference to the numerous spike protuberances of the fruit. n Thailand and Malaysia, peak harvest is between June and July; in Indonesia, October to February; and in the Philippines, August to September. However, it has been observed that harvest period varies with elevation and cultivar. Orchards in low elevations tend to produce fruits early. ",
        "image" : "img/durian.jpg",
      },
      ];
    }

    render(html, component){

      component.innerHTML += html;
    }

    reRender(html, component){

      component.innerHTML = html;
    }

    formDesign(){
    let id = document.getElementById('kill');
    let name =document.getElementById('kill2');
    let description =document.getElementById('kill3');
    let image =document.getElementById('kill4');


      let form = {      
        "id": id.value,
        "name": name.value,
        "description" : description.value,
        "image": image.value,

      };


      this.form.push(form);

      
      id.value = name.value = description.value = image.value =  ''; 
    } 

    formDelete(key){
      let r = this.form;
      for(let i=0;i<r.length;i++){
        if(r[i].id == key){
          this.form.splice(i,1);
          break;
        }
      }   
      this.formList();
    }

    updateformApp(id){

      id = id+1;
      let formDummy = {
        "id" :  id,

        "name" : $('#formname').val(),
        "description" : $('#formdes').val(),
        "image" : $('#formimg').val(),
    
      }

      let r = this.form;
      for(let i=0;i<r.length;i++){
        if(r[i].id == id){
          r[i] = formDummy;
          break;
        }
      }

      this.formList();
    }


    SearchFormById(id){
      let r = this.form;
      for(let i=0;i<r.length;i++){
        if(id==r[i].id){
          return r[i];
        }
      }
    } 

    SearchForm(name){
      let objects = [];
      let r = this.form;
      for(let i=0;i<r.length;i++){
        let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
        if(expr){
          objects.push(r[i]);
        }
      }
      return objects;
    }



  }

  class Component extends App{
    constructor(){

      super();
    }

    formDesignLayout(){
      let html = `

      <div class="carousel carousel-slider">
      <a class="carousel-item" href="#one!"><img src="img/green1.png"></a>
      <a class="carousel-item" href="#two!"><img src="img/green2.png"></a>
      <a class="carousel-item" href="#three!"><img src="img/green3.jpg"></a>
      <a class="carousel-item" href="#four!"><img src="img/green4.jpg"></a>
      </div>
      <nav>
      <div class="nav-wrapper  blue accent-2">
      <a href="#" ="component.formList()" class="brand-logo"> &nbsp&nbsp&nbsp&nbspWelcome! Get Started --></a></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <li><a href="#" onclick="component.Homepage()">View Farm Layouts</a></li>
      <li><a href="#" onclick="component.formList()">Crops and Trees</a></li>  
      <li><a href="#" onclick="component.latestForm()">Add Crop/Tree</a></li>
      </ul>



      </div>
      </nav>


      </div>


      <div id="Homepage"></div>
      <div id="formRecent"></div>
      <div id="viewForm"></div>
      <div id="updateForm"></div>
      <div id="formList"></div>
      <div id="latestForm"></div>



      </div>
      <center>
      <div class="col l4 offset-l2 s12 ">
      <h5 class="red-text ">Agricultural Layout and Calculator App</h5>

      <ul>
      <li><a class="black-text text-lighten-0" href="https://www.da.gov.ph/"onclick="component.Homepage()">Department of Agriculture</li>
      <li><a class="black-text text-lighten-0" href="www.psa.gov.ph/"onclick="component.latestForm()">Philippine Statistics Office</li>
      <li><a class="black-text text-lighten-0" href="daf.armm.gov.ph/"onclick="component.formList()"">ARMM Department Of Agriculture</li>
      <li><a class="black-text text-lighten-0" href="www.davaocity.gov.ph/"onclick="component.formList()"">City Government of Davao</li>
      <li><a class="black-text text-lighten-0" href="https://www.gov.ph/"onclick="component.formList()"">Others</li>
      </center>


      </ul>
      </div>



      </div>
      </div>


      <div class="footer-copyright"> 
      <center>
      <ul>&copy; Copyright 2017 Co-Developed by John Adriel Ylarde and Eper Punay</ul>
      <img class="center" src="img/.jpg" style="width:200spx;height:250px;"/> 
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fdecode-herokuylarde.herokuapp.com%2F&width=50&layout=box_count&action=like&show_faces=false&share=false&height=65&appId" width="50" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
      </center>  
      </div>
      </div>

      </footer>

      `;

      this.reRender(`
        ${html}

        `,document.getElementById("app"));
      this.formRecent();    
    }

    viewForm(id){
      let r = this.SearchFormById(id);

      let html = `
      <h5 class="center-align">${r.name}</h5>
      <div class="row">       
      <div class="col s12 m12">
      <div class="card horizontal small">
      <div class="card-image">
      <img src="${r.image}">
      </div>
      <div class="card-stacked">
      <div class="card-content">
      <p>${r.description}</p>
      </div>
      <div class="card-action small">   

      <button onclick="component.updateForm(${r.id})" class="btn waves-effect waves-green">Create Layout</button>
      <button onclick="component.formDelete(${r.id})" class="btn waves-effect waves-red">Calculate Profit</button>
      <button onclick="component.formList()" class="btn waves-effect waves-yellow">Back</button>

      </div>            
      </div>     
      </div>   

      </div>      
      </div>
      `;

      this.reRender(`   
        ${html}     
        `,document.getElementById("viewForm"));
      $('#viewForm').show();
      $('#formRecent').hide();
      $('#updateForm').hide();
      $('#formList').hide();
      $('#latestForm').hide();
      $('#Homepage').hide();
    }

    formList(){
      let html = `

      <br/>
      <nav>
      <div class="nav-wrapper white">
      <form>
      <div class="input-field">       
      <input onkeyup="component.formItems(this.value)" id="search" type="search" placeholder="Search here...." required>
      <i class="material-icons">X</i>
      </div>
      </form>
      </div>
      </nav>
      <br/>

      `;

      html += `
      <div class="row" id="formItems">
      `;
      let r = this.form;
      for(let i=0;i<r.length;i++){
        html+= `
        <div class="col s12 m4">
        <div class="card small hoverable">
        <div class="card-image">
        <img src="${r[i].image}">
        <span class="card-title">${r[i].name}</span>
        </div>
        <div class="card-content">
        <p>${r[i].description}</p>
        </div>
        <div class="card-action">
        <a href="#" onclick="component.viewForm(${r[i].id})">Show Details</a>
        </div>
        </div>
        </div>
        `;
      }

      html += `</div>`;

      this.reRender(`
        ${html}
        `,document.getElementById("formList"));
      $('#formList').show();
      $('#viewForm').hide();
      $('#updateForm').hide();
      $('#formRecent').hide();
      $('#latestForm').hide();    
      $('#Homepage').hide();
    }

    formItems(name){
      let html = ``;
      let r = this.SearchForm(name);
      for(let i=0;i<r.length;i++){
        html+= `
        <div class="col s12 m4">
        <div class="card small hoverable">
        <div class="card-image">
        <img src="${r[i].image}">
        <span class="card-title">${r[i].name}</span>
        </div>
        <div class="card-content">
        <p>${r[i].description}</p>
        </div>
        <div class="card-action">
        <a href="#" onclick="component.viewForm(${r[i].id})">Show Details</a>
        </div>
        </div>
        </div>
        `;
      }   
      this.reRender(`
        ${html}
        `,document.getElementById("formItems"));
      $('#formList').show();
      $('#viewForm').hide();
      $('#updateForm').hide();
      $('#formRecent').hide();  
      $('#latestForm').hide();
      $('#HomePage').hide();    
    }


    formRecent(){

      let html = `
      
      <div class="row">
      `;

      let r = this.form;
      let count = 0;
      for(let i=(r.length-1);i>=0;i--){
        if(count++ === 6)break;
        html+= `
        <div class="col s12 m4">
        <div class="card small hoverable">
        <div class="card-image">
        <img src="${r[i].image}">
        <span class="card-title">${r[i].name}</span>
        </div>
        <div class="card-content">
        <p>${r[i].description}</p>
        </div>
        <div class="card-action">
        <a href="#" onclick="component.viewForm(${r[i].id})">Show Details</a>
        </div>
        </div>
        </div>
        `;
      }
      

      html += `</div>`;

      this.render(`   
        ${html}
        `,document.getElementById("formForm"));
    }

    latestForm(){
      let html = `

      <div class="row">
      <div class="input-field col s6 ">
      <input disabled value="${this.form.length+1}" id="kill" type="text"class=" vintage" >
      </div>
      <div class="row">
      <div class="input-field col s6 ">
      <input id="kill2" type="text"  class="validate">
      <label for="kill2" data-error="Input Invalid" data-success="&#10004;Input Valid"><a class="black-text text-lighten-0">Enter Name</a></label>
      </div>
      </div>

      <div class="row">
      <div class="input-field col s6 ">
      <input id="kill3" type="text" class="validate">
      <label for="kill3" data-error="Input Invalid" data-success="&#10004;Input Valid"><a class="black-text text-lighten-0">Enter Information</a></label>
      </div>

      <div class="row">
      <div class="input-field col s6 ">
      <input id="kill4" type="url" class="validate">
      <label for="kill4" data-error="&times;Input Error" data-success="&#10004;Input Valid"><a class="black-text text-darken-5"> Enter Picture (LINK)</a></label>
      </div>
      <div align="center">
      <button onclick="component.formList()" class="btn waves-effect waves-yellow">Back</button>
      <button onclick="component.formDesign()" class="btn waves-effect waves-green">Add</button>
      </div>

      `;

      this.reRender(`
        ${html}
        `,document.getElementById("latestForm"));
      $('#latestForm').show();
      $('#formList').hide();
      $('#updateForm').hide();
      $('#viewForm').hide();
      $('#formRecent').hide(); 
      $('#Homepage').hide();    
    }


    updateForm(id){

      id = id - 1;
      let html = `

      <div class="row">
      <div class="input-field col s6">
      <h5><B>Update to Latest Form:</B></h5>
      <tr>
      <input id="formname" type="text" class="validate" value="${this.form[id].name}"></div>
      <input id="formimg" type="text" class="validate" value="${this.form[id].image}"></div>
      <div class="input-field col s6">
      <h5><B>Update Description</B></h5>


      <input id="formdes" type="text" class="validate" value="${this.form[id].description}"></div>
      </div>
      <a onclick="component.updateformApp(${id})" class="waves-effect blue waves-light btn">Update</a>

      `;  
      this.reRender(`

        ${html}

        `,document.getElementById("updateForm"));   

      $('#formList').hide();
      $('#viewForm').hide();
      $('#updateForm').show();
      $('#formRecent').hide();  
      $('#latestForm').hide();
      $('#Homepage').hide();    

    }






    Homepage(){
      let html=`

      <div id="fb-root"></div>
  <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

  <div class="fb-like" data-href="http://decode-herokuylarde.herokuapp.com/" data-layout="box_count" data-action="like" data-show-faces="false" data-share="true"></div>

      `;
      this.reRender(`
        ${html}
        `,document.getElementById("latestForm"));
      $('#latestForm').hide();
      $('#formList').hide();
      $('#updateForm').hide();
      $('#viewForm').hide();
      $('#formRecent').show();  
      $('#Homepage').hide();  

    }


  } 
  let component = new Component();
  component.formDesignLayout();
