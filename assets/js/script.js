$(function(){
	var area3Img;
	var area3ImgN;
	$('.area3 .corpo .lado1 .jogos .jogosInt .imagem').hover(function(){
		area3Img = $(this).find('.imgJogo img');
		area3ImgN = $(this).find('.jogadores .numero');
		$(this).css('background-color','rgba(0, 0, 255, 0.2)');
		$(area3Img).css('width','150px');
		$(area3Img).css('box-shadow','0px 0px 10px 5px #fff');
		$(area3ImgN).css('color','#000');
	},
		function(){
			area3Img = $(this).find('.imgJogo img');
			$(this).css('background-color','rgba(0, 0, 255, 0.7)');
			$(area3Img).css('width','120px');
			$(area3Img).css('box-shadow','0px 0px 0px 0px #fff');
			$(area3ImgN).css('color','#fff');
		}
	);

	$('.area2 .areaInt .areaBanner .banners .banner1').show('slow');
});