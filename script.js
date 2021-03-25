		function init(div) {
    //Вырезаем блок который хотим переместить
	  		var Block = $('div-class(id) который нужно переместить').detach();
        //вставляем блок последним ребенком блока div - который мы получаем пареметром в функцию при вызове
	  		Block.appendTo(div);	
	};
  //Условие и событие при котором вызываем функцию
		$(window).width() < 1023 ? $( init('.div') ) : $( init('.div') );
		window.onresize = function(event) {
			$(window).width() < 1023 ? $( init('.div') ) : $( init('.div') );
	};
