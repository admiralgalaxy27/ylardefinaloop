  "use strict";

  class App{
    constructor(){
      this.form = [
      {
        "id":1,
        "name" : "Lyn Berdin",
        "description" : "We met when we were in second year college at ADDU. My first impression with here was she was shy and intelligent. We became close when we were in fourth year college. Every time we hang out with our friends, we talk a lot. Since then I begin to my develop my feelings for here. I asked her out to join our family outing on March 2016. She agreed and on that evening, I asked her to be my girlfriend. Now, we are in our 6 months. :)",
        "image" : "img/z.jpg",   
      },
      {
        "id":2,
        "name" : "Reyner John Buenaluz",
        "description" : "He is the man who has many nicknames. RJ, Rey, Reyn, Ner, J, John, reynskie, Arj. Those are what they call him. He is my oldest cousin. He likes to play DOTA 2 and to watch basketball games. Even though he seems to socialize a lot thus making him famous in the campus  ",
        "image" : "img/v.jpg",
      },
      {
        "id":3,
        "name" : "April Joy Buenaluz",
        "description" : "She is one of my favorite cousin. She likes to share secrets with me and I feel comfortable having a conversation with her. We haven't had any serious conflicts because we get along with each other most of the time. ",
        "image" : "img/a.jpg",
      },
      {
        "id":4,
        "name" : "Carl Adrian Buenaluz",
        "description" : "The guy who just stays inside the house and doesn't want to get out. He plays his laptop all day. I think he became lonely when his mom went to Japan. Still, he is a good guy and is not hot-tempered.",
        "image" : "img/b.jpg",
      },
      {
        "id":5,
        "name" : "Angelo Pereira",
        "description" : "My classate in AdDU. He taught me some magnificent tricks in Dota. We just became friends in our last year in college and since then we always hang out with our friends. He is also very skilled in Dota. He joined many local tournaments and won. GGWP",
        "image" : "img/njRg-su6.jpg",
      },
      {

        "id":6,
        "name" : "Rodrigo Juaban, Jr",
        "description" : "The guy who is noisy when playing a game. He always talk trash to his enemies in a game. Hot-temepered but if you get to know him, he is really a good guy.",
        "image" : "img/ZiQaBxSo.jpg",
      },
      {

        "id":7,
        "name" : "Ceasar Lubaton",
        "description" : "An extrovert kind of guy. Talks a lot and doesn't know when to stop. Every after class, he is the one i'm with since we have the same schedule.  ",
        "image" : "img/Xr1Xj4Ru.jpg",
      },
      {
        "id": 8,
        "name" : "Reyman Caumanday",
        "description" : "The Tagum guy. Every weekend, he always went to Tagum. If we have any group outing, he cannot join because he's in Tagum. He invited me once to join with him in his gym. My close firend during thrid year college.",
        "image" : "img/CvYLQ9VVIAAErMi.jpg",
      },
      { "id":7,
        "name" : "Deo Dexter Guillermo",
        "description" : "The chickboy. Deo is known for charming many girls. Girls can run but cannot hide from him. He is like a predator stalking his prey",
        "image" : "img/bgx088AJ.jpg",
      },
      { "id":9,
        "name" : "Christian Jake Polpol",
        "description" : "Tall, dark and kind is what they say. The guy who cannot control his body and dance all the time ,Even when we are eating his dancing. Every outing he is the main man. He organizes the outing. Since he is the one who have a car in our group, he gets to choose the location of the outings. Never trust him on secrets.  ",
        "image" : "img/VtpejFIn.jpg",
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
      <a class="carousel-item" href="#one!"><img src="img/1.png"></a>
      <a class="carousel-item" href="#two!"><img src="img/2.jpg"></a>
      <a class="carousel-item" href="#three!"><img src="img/3.jpg"></a>
      <a class="carousel-item" href="#four!"><img src="img/4.jpg"></a>
      </div>
      <nav>
      <div class="nav-wrapper  blue accent-2">
      <a href="#" ="component.formList()" class="brand-logo"> &nbsp&nbsp&nbsp&nbspWelcome! Get Started --></a></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <li><a href="#" onclick="component.Homepage()">Home</a></li>
      <li><a href="#" onclick="component.formList()">All Friends</a></li>  
      <li><a href="#" onclick="component.latestForm()">Add Friend</a></li>
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
      <h5 class="red-text ">Know your Friend App</h5>

      <ul>
      <li><a class="black-text text-lighten-0" href="https://www.nba.com.ph"onclick="component.Homepage()">NBA</li>
      <li><a class="black-text text-lighten-0" href="http://pba.com.ph"onclick="component.latestForm()">PBA</li>
      <li><a class="black-text text-lighten-0" href="http://www.wwe.com/"onclick="component.formList()"">WWE</li>
      <li><a class="black-text text-lighten-0" href="http://pba.com/"onclick="component.formList()"">Bowling</li>
      <li><a class="black-text text-lighten-0" href="https://www.tennis.com"onclick="component.formList()"">Others</li>
      </center>


      </ul>
      </div>



      </div>
      </div>

      <div class="footer-copyright">
      <center>
      <ul>&copy; Copyright 2016 Ylarde Productions</ul>
      <img class="center" src="img/aw.jpg" style="width:200spx;height:250px;"/> 
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

      <button onclick="component.updateForm(${r.id})" class="btn waves-effect waves-green">Edit</button>
      <button onclick="component.formDelete(${r.id})" class="btn waves-effect waves-red">Remove</button>
      <button onclick="component.formList()" class="btn waves-effect waves-yellow">Return</button>

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
      <button onclick="component.formList()" class="btn waves-effect waves-yellow">Return</button>
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
