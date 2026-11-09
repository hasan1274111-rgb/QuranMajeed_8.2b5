
var listOfObjects = new Array();
var theme = "";

function testmsg() {
	console.log("Quran Animation Running.. !");

	// below lines used to get line height to draw lines.
	//var rr = document.getElementById("page4");
	//console.log(rr.getElementsByClassName("qry0")[0].childNodes[0].getBoundingClientRect().height);


}



function checkObjectInArray(html_txt){

    var arrayLength = listOfObjects.length;
    for (var i = 0; i < arrayLength; i++) {



        if(html_txt ==  listOfObjects[i]){

            return true;

        }

    }
    return false;


}

function findAndRemoveObjectInArray(html_txt){
    var indextoRemove = -1;
    var arrayLength = listOfObjects.length;
    for (var i = 0; i < arrayLength; i++) {



        if(html_txt ==  listOfObjects[i]){

            indextoRemove = i;
        }

    }

    if(indextoRemove !== -1){

        listOfObjects.splice(indextoRemove, 1);

    }

}



$(window).scroll(function () {



	$(window).scroll(function () {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function () {
			// do something
			//console.log("Haven't scrolled in 2000ms!");


			var findMiddleElement = (function (docElm) {
				var viewportHeight = docElm.clientHeight,
					// here i'm using pre-cached DIV elements, but you can use anything you want.
					// Cases where elements are generated dynamically are more CPU intense ofc.
					elements = $('div');

				return function (e) {
					var middleElement;
					if (e && e.type == 'resize')
						viewportHeight = docElm.clientHeight;

					elements.each(function () {
						var pos = this.getBoundingClientRect().top;

						if (pos >= viewportHeight || pos <= 0) {
                        // if an element is more or less in the middle of the viewport
                        middleElement = this;

                        if($(middleElement).html().indexOf("theme3") !== -1){
                            theme = "theme3";
                        }



                        // surah Header start
                        if($(middleElement).html().indexOf("zoom-in-zoom-out") !== -1){

                            if($(middleElement).html().indexOf("div") !== -1){

                            }
                            else{
                            if(theme.trim() == "theme3"){

                                $(middleElement).find('.no-zoom-in-zoom-out').each(function (i, obj) {

                                    console.log("O-" + $(obj).html());


                                    if(checkObjectInArray($(obj).html())){
                                        findAndRemoveObjectInArray($(obj).html());
                                        $(obj).toggleClass('zoom-in-zoom-out');
                                        $(obj).toggleClass('no-zoom-in-zoom-out-white');
                                    }

                                });

                             }
                             else{

                             $(middleElement).find('.no-zoom-in-zoom-out').each(function (i, obj) {

                                 console.log("O-" + $(obj).html());


                                 if(checkObjectInArray($(obj).html())){
                                     findAndRemoveObjectInArray($(obj).html());
                                     $(obj).toggleClass('zoom-in-zoom-out');
                                     $(obj).toggleClass('no-zoom-in-zoom-out');
                                 }

                             });

                             }

                            }

                        }
                        // surah Header end


                        // Juzz Header start
                        if($(middleElement).html().indexOf("para-first-line-animation-start") !== -1){

                            if($(middleElement).html().indexOf("data-page=") !== -1){

                            }
                            else{
                                $(middleElement).find('.para-first-line-animation-start').each(function (i, obj) {


                                    if(checkObjectInArray($(obj).html())){
                                        findAndRemoveObjectInArray($(obj).html());
                                        $(obj).toggleClass('para-first-line-animation-stopped');
                                        $(obj).toggleClass('para-first-line-animation-start');
                                    }

                                });
                            }
                        }
                        // Juzz Header end

                        // Juzz Header start
                        if($(middleElement)[0].outerHTML.indexOf("para-first-line-animation-start") !== -1){

                            if($(middleElement)[0].outerHTML.indexOf("data-page=") !== -1){

                            }
                            else{
                                $(middleElement).find('.para-first-line-animation-start').each(function (i, obj) {


                                    if(checkObjectInArray($(obj)[0].outerHTML)){
                                        findAndRemoveObjectInArray($(obj)[0].outerHTML);
                                        $(obj).toggleClass('para-first-line-animation-stopped');
                                        $(obj).toggleClass('para-first-line-animation-start');
                                    }

                                });
                            }
                        }
                        // Juzz Header end


                        // Marker Animation Header start
                        if($(middleElement).html().indexOf("marksAnim") !== -1){

                            if($(middleElement).html().indexOf("data-page=") !== -1){

                            }
                            else{
                                $(middleElement).find('.marksAnim').each(function (i, obj) {

                                    if(checkObjectInArray($(obj)[0].outerHTML)){
                                        findAndRemoveObjectInArray($(obj)[0].outerHTML);
                                        $(obj).toggleClass('marksAnimOff');
                                        $(obj).toggleClass('marksAnim');
                                    }

                                });
                            }
                        }
                        // Marker Animation Header end

                        // Marker Animation Header start
                        if($(middleElement).html().indexOf("marksAnimText") !== -1){

                            if($(middleElement).html().indexOf("data-page=") !== -1){

                            }
                            else{
                                $(middleElement).find('.marksAnimText').each(function (i, obj) {

                                    if(checkObjectInArray($(obj)[0].outerHTML)){
                                        findAndRemoveObjectInArray($(obj)[0].outerHTML);
                                        $(obj).toggleClass('marksAnimTextOff');
                                        $(obj).toggleClass('marksAnimText');
                                    }

                                });
                            }
                        }
                        // Marker Animation Header end

                        // Marker Animation Header Sijda start
                        if($(middleElement).html().indexOf("marksAnimSijda") !== -1){
                             console.log("A-");
                            if($(middleElement).html().indexOf("data-page=") !== -1){

                            }
                            else{
                            console.log("AA-" + $(middleElement).html());
                                $(middleElement).find('.marksAnimSijda').each(function (i, obj) {
                                console.log("AAA-" + $(obj)[0].outerHTML);
                                    if(checkObjectInArray($(obj)[0].outerHTML)){
                                        console.log("AAAA-" + $(obj)[0].outerHTML);
                                        findAndRemoveObjectInArray($(obj)[0].outerHTML);
                                        $(obj).toggleClass('marksAnimOffSijda');
                                        $(obj).toggleClass('marksAnimSijda');


                                    }

                                });
                            }
                        }
                        // Marker Animation Header Sijda end

                        // Marker Animation Header Sijda start
                        if($(middleElement).html().indexOf("marksAnimTextSijda") !== -1){

                            if($(middleElement).html().indexOf("data-page=") !== -1){

                            }
                            else{
                                $(middleElement).find('.marksAnimTextSijda').each(function (i, obj) {

                                    if(checkObjectInArray($(obj)[0].outerHTML)){
                                        findAndRemoveObjectInArray($(obj)[0].outerHTML);
                                        $(obj).toggleClass('marksAnimTextOffSijda');
                                        $(obj).toggleClass('marksAnimTextSijda');
                                    }

                                });
                            }
                        }
                        // Marker Animation Header Sijda end



                        //console.table(listOfObjects);


						}
						else if (pos >= 10 && pos <= (viewportHeight - (viewportHeight * 0.3))) { // 2.5 - 1.5


							// if an element is more or less in the middle of the viewport
                            middleElement = this;


                            // surah Header start
                            if($(middleElement).html().indexOf("zoom-in-zoom-out") !== -1){

                                if($(middleElement).html().indexOf("div") !== -1){

                                }
                                else{

                                    if(theme.trim() == "theme3"){

                                    $(middleElement).find('.zoom-in-zoom-out').each(function (i, obj) {

                                    console.log("S-R-" + $(obj).html());

                                        if(!checkObjectInArray($(obj).html())){
                                            listOfObjects.push($(obj).html());
                                            $(obj).toggleClass('zoom-in-zoom-out');
                                            $(obj).toggleClass('no-zoom-in-zoom-out-white');
                                        }

                                    });
                                   }
                                   else{

                                   $(middleElement).find('.zoom-in-zoom-out').each(function (i, obj) {

                                   console.log("S-R-" + $(obj).html());

                                       if(!checkObjectInArray($(obj).html())){
                                           listOfObjects.push($(obj).html());
                                           $(obj).toggleClass('zoom-in-zoom-out');
                                           $(obj).toggleClass('no-zoom-in-zoom-out');
                                       }

                                   });

                                   }
                                }
                            }
                            // surah Header end


                            // Juzz Header start
                            if($(middleElement).html().indexOf("para-first-line-animation-stopped") !== -1){

                                if(($(middleElement).html().indexOf(".zoom-in-zoom-out") == -1) && ($(middleElement).html().indexOf(".no-zoom-in-zoom-out") == -1)){

                                    if($(middleElement).html().indexOf("data-page=") !== -1){

                                    }
                                    else{
                                        console.log("CCCCC-" + $(middleElement).html());
                                        if($(middleElement).html().indexOf("theme3") !== -1){
                                            $(middleElement).find('.para-first-line-animation-stopped').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj).html())){
                                            console.log("AAAA-");
                                                listOfObjects.push($(obj).html());
                                                $(obj).toggleClass('para-first-line-animation-stopped');
                                                $(obj).toggleClass('para-first-line-animation-start-white');

                                            }

                                        });
                                        }
                                        else{
                                        $(middleElement).find('.para-first-line-animation-stopped').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj).html())){
                                            console.log("AAAB-");
                                                listOfObjects.push($(obj).html());
                                                $(obj).toggleClass('para-first-line-animation-stopped');
                                                $(obj).toggleClass('para-first-line-animation-start');

                                            }

                                        });
                                        }


                                    }
                                }
                            }
                            // Juzz Header end


                            // Juzz Header start
                            if($(middleElement)[0].outerHTML.indexOf("para-first-line-animation-stopped") !== -1){

                                if(($(middleElement)[0].outerHTML.indexOf(".zoom-in-zoom-out") == -1) && ($(middleElement)[0].outerHTML.indexOf(".no-zoom-in-zoom-out") == -1)){

                                    if($(middleElement)[0].outerHTML.indexOf("data-page=") !== -1){

                                    }
                                    else{
                                        //$(middleElement).find('.para-first-line-animation-stopped').each(function (i, obj) {



                                            if(!checkObjectInArray($(middleElement)[0].outerHTML)){
                                                listOfObjects.push($(middleElement)[0].outerHTML);
                                                $(middleElement).toggleClass('para-first-line-animation-stopped');
                                                $(middleElement).toggleClass('para-first-line-animation-start');

                                            }

                                        //});
                                    }
                                }
                            }
                            // Juzz Header end


                            // Marker Animation Header start
                            if($(middleElement).html().indexOf("marksAnimOff") !== -1){

                                        $(middleElement).find('.marksAnimOff').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj)[0].outerHTML)){
                                                console.log("AAA" + $(obj)[0].outerHTML);
                                                $(obj).toggleClass('marksAnimOff');
                                                $(obj).toggleClass('marksAnim');
                                                listOfObjects.push($(obj)[0].outerHTML);
                                            }

                                        });

                            }
                            // Marker Animation Header end

                            // Marker Animation2 Header start
                            if($(middleElement).html().indexOf("marksAnimTextOff") !== -1){

                                        $(middleElement).find('.marksAnimTextOff').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj)[0].outerHTML)){
                                                console.log("BBB");
                                                $(obj).toggleClass('marksAnimTextOff');
                                                $(obj).toggleClass('marksAnimText');
                                                listOfObjects.push($(obj)[0].outerHTML);
                                            }

                                        });

                            }
                            // Marker Animation2 Header end

                            // Marker Animation Header Sijda start
                            if($(middleElement).html().indexOf("marksAnimOffSijda") !== -1){

                                        $(middleElement).find('.marksAnimOffSijda').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj)[0].outerHTML)){
                                                console.log("AAA" + $(obj)[0].outerHTML);
                                                $(obj).toggleClass('marksAnimOffSijda');
                                                $(obj).toggleClass('marksAnimSijda');
                                                listOfObjects.push($(obj)[0].outerHTML);
                                            }

                                        });

                            }
                            // Marker Animation Header Sijda end

                            // Marker Animation2 Header Sijda start
                            if($(middleElement).html().indexOf("marksAnimTextOffSijda") !== -1){

                                        $(middleElement).find('.marksAnimTextOffSijda').each(function (i, obj) {

                                            if(!checkObjectInArray($(obj)[0].outerHTML)){
                                                console.log("BBB");
                                                $(obj).toggleClass('marksAnimTextOffSijda');
                                                $(obj).toggleClass('marksAnimTextSijda');
                                                listOfObjects.push($(obj)[0].outerHTML);

                                            }

                                        });

                            }
                            // Marker Animation2 Header Sijda end


						}
						else{

						    // if an element is more or less in the middle of the viewport
                            middleElement = this;



                            // surah Header start
                            if($(middleElement).html().indexOf("zoom-in-zoom-out") !== -1){

                                if($(middleElement).html().indexOf("div") !== -1){

                                }
                                else{


                                    $(middleElement).find('.zoom-in-zoom-out').each(function (i, obj) {

                                    console.log("S-NR-" + $(obj).html());

                                    });

                                }

                            }
                            // surah Header start

						}


                    //console.log("item in array: "  + listOfObjects.length);


					});

				}
			})(document.documentElement);


			findMiddleElement();

		}, 500));
	});


});
