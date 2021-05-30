const btn=document.getElementById('btn_search')
const img=document.querySelector('.img_div')
const info=document.querySelector('.text_div')
btn.addEventListener('click',function get_film(event){
    event.preventDefault();
  
    document.querySelectorAll('.text_div p').forEach(function(a){
        a.remove()
        })
        document.querySelectorAll('.img_div img').forEach(function(a){
                a.remove()
            })

const input_id=document.getElementById('input_search').value;
const url_api=`https://api.themoviedb.org/3/movie/${input_id}&limit=1?api_key=9b8441f3f73d564077f7e24d142bd63e`;
fetch(url_api)
.then(res => {
    return res.json(); 
 })
 //  سوف تاخد البيانات من THEN الاولى
.then(data => {
    const film_img=document.createElement('img')
    film_img.src= `https://www.themealdb.com/images/${data.poster_path}` //جلب البيانات من data 
    // poster_path جلب القيمة المخزنة في 
      film_img.alt='Film poster' 
      img.appendChild(film_img) 
      
        const film_name=document.createElement('p');
        const film_name_span=document.createElement('span')
        const film_name_span_node=document.createTextNode('- Film Name : ')
        film_name_span.appendChild(film_name_span_node)

        const film_name_node=document.createTextNode(data.original_title)
        film_name.appendChild(film_name_span)
        film_name.appendChild(film_name_node)
        info.appendChild(film_name)

        const film_lang=document.createElement('p');
        const film_lang_span=document.createElement('span')
        const film_lang_span_node=document.createTextNode('- Film Language : ')
        const film_lang_node=document.createTextNode(data.original_language)
        film_lang_span.appendChild(film_lang_span_node)
        film_lang.appendChild(film_lang_span)
        film_lang.appendChild(film_lang_node)
        info.appendChild(film_lang)

        const film_overview=document.createElement('p');
        const film_over_span=document.createElement('span')
        const film_over_span_node=document.createTextNode('- Film OverView : ')
        const film_overview_node=document.createTextNode(data.overview)
        film_over_span.appendChild(film_over_span_node)
        film_overview.appendChild(film_over_span)
        film_overview.appendChild(film_overview_node)
        info.appendChild(film_overview)
        
        console.log('data',data)
    })

.catch(err => console.log('err',err))// console لطباعة الخطأ داخل ال 
})

