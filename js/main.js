$(document).ready(function () {
    // Slider
    if(window.location.href.indexOf('index') > -1){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
      });
    }
   

    //   // Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
        {
          title: 'Prueba de titulo 1',
          date: 'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+ " del "+ moment().format("YYYY"), //Libreria moment.js
          content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit faucibus cubilia nunc ligula commodo, iaculis himenaeos dui taciti gravida. Felis rutrum vulputate tempor interdum purus fusce, duis bibendum vitae semper quisque auctor, varius laoreet faucibus non ante. Placerat nibh porta proin ridiculus leo nisl dictumst faucibus, penatibus facilisis class semper habitant dui sagittis hac, tellus cursus tincidunt platea nulla euismod metus.'
        },
        {
          title: 'Prueba de titulo 2',
          date: 'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+ " del "+ moment().format("YYYY"),//Libreria moment.js
          content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit faucibus cubilia nunc ligula commodo, iaculis himenaeos dui taciti gravida. Felis rutrum vulputate tempor interdum purus fusce, duis bibendum vitae semper quisque auctor, varius laoreet faucibus non ante. Placerat nibh porta proin ridiculus leo nisl dictumst faucibus, penatibus facilisis class semper habitant dui sagittis hac, tellus cursus tincidunt platea nulla euismod metus.'
        },
        {
          title: 'Prueba de titulo 3',
          date: 'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+ " del "+ moment().format("YYYY"),//Libreria moment.js
          content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit faucibus cubilia nunc ligula commodo, iaculis himenaeos dui taciti gravida. Felis rutrum vulputate tempor interdum purus fusce, duis bibendum vitae semper quisque auctor, varius laoreet faucibus non ante. Placerat nibh porta proin ridiculus leo nisl dictumst faucibus, penatibus facilisis class semper habitant dui sagittis hac, tellus cursus tincidunt platea nulla euismod metus.'
        },
        {
          title: 'Prueba de titulo 4',
          date: 'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+ " del "+ moment().format("YYYY"),//Libreria moment.js
          content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit faucibus cubilia nunc ligula commodo, iaculis himenaeos dui taciti gravida. Felis rutrum vulputate tempor interdum purus fusce, duis bibendum vitae semper quisque auctor, varius laoreet faucibus non ante. Placerat nibh porta proin ridiculus leo nisl dictumst faucibus, penatibus facilisis class semper habitant dui sagittis hac, tellus cursus tincidunt platea nulla euismod metus.'
        },
        
      ];
      // console.log(posts);


      posts.forEach((item, index) => {
        var post = `
            <article class="post">
                  <h2>${item.title}</h2>
                      <span class= "date" >${item.date}</span>
                        <p>${item.content}</p>
                      <a href="#" class="button-more">Read more</a>
            </article>
        `;
        // console.log(post);

       $("#posts").append(post);

      });
    }

    //   // Selector de tema

      var theme = $("#theme");

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });
      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
      });
      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });

      // Scroll arriba de la web
      $('.subir'). click(function(e){
        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        },250);

        return false;

      });

    //   //Login falso

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

      });
      var form_name = localStorage.getItem("form_name");

      if(form_name !=null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        
        $("#login").hide();

        $("#logout").click(function(){
              localStorage.clear();
              location.reload();
         });
        
       }


    //   //Acordeon
      if(window.location.href.indexOf('about') > -1){
      $( "#acordeon" ).accordion();
    //     collapsible: true
    //   });
     }


      // Reloj
      if(window.location.href.indexOf('reloj') > -1){
      
      setInterval(() => {
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);//imprime dentro de la pagina
        
      }, 1000);
      
    }

    //Validacion
    if(window.location.href.indexOf('contact') > -1){

      $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
      });

      $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollTopOnError: true
    });

    }

    });
