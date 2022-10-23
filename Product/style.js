$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    draggable: false,
    centerMode: false,
    focusOnSelect: true,
});

$('#buy-button').click(function(){
  Swal.fire({
    title: 'Bạn có chắc chắn sẽ mua sản phẩm này ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Chắc chắn',
    cancelButtonText:'Không'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Thanh toán thành công',
        'Cảm ơn quý khách đã mua sản phẩm',
        'success'
      )
    }
  })
})

$('#add-to-cart-button').click(function(){
  Swal.fire({
    icon: 'success',
    title: 'Đã thêm vào giỏ hàng',
    showConfirmButton: false,
    timer: 1000,
  })
})

var value = parseInt(document.getElementById('number').value, 10);
var price = document.getElementById('price');
var totalprice= document.getElementById('total-price');
function increaseValue() {
  value++;
  document.getElementById('number').value = value;
  totalprice.textContent = value*price.textContent;
}
function decreaseValue() {
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    totalprice.textContent = value*price.textContent;
}
function changeValue1(){
  var number = document.getElementById('value-change1');
  totalprice.textContent= value*price.textContent*number.textContent;
}
function changeValue2(){
  var number = document.getElementById('value-change2');
  totalprice.textContent= value*price.textContent*number.textContent;
}

$('.other-product-content').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed: 1000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          },
    ]
});

function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
    }
document.getElementById("defaultOpen").click();