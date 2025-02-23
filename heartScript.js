let mainContainer;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("heartContainer");
    mainContainer = document.querySelector('.mainContainer');  // Assuming you have a mainContainer element

    // Center the container using JavaScript by setting its position
    container.style.position = 'absolute';
    container.style.left = '50%';
    container.style.top = '50%';
    container.style.transform = 'translate(-50%, -50%)'; // This ensures centering

    // Define unique transformations for each picture (Left or Right movements)
    const transformations = {
        picOne: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picTwo: { animation: "slide-right 0.5s ease", translateX: "328px", translateY: "10px" },
        picThree: { animation: "slide-left 0.5s ease", translateX: "-480px", translateY: "10px" },
        picFour: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picFive: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picSix: { animation: "slide-left 0.5s ease", translateX: "250px", translateY: "10px" },
        picSeven: { animation: "slide-left 0.5s ease", translateX: "328px", translateY: "10px" },
        picEight: { animation: "slide-left 0.5s ease", translateX: "408px", translateY: "10px" },
        picNine: { animation: "slide-left 0.5s ease", translateX: "-480px", translateY: "10px" },
        picTen: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picEleven: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picThirteen: { animation: "slide-left 0.5s ease", translateX: "250px", translateY: "10px" },
        picFourteen: { animation: "slide-left 0.5s ease", translateX: "328px", translateY: "10px" },
        picFifteen: { animation: "slide-left 0.5s ease", translateX: "408px", translateY: "10px" },
        picSixteen: { animation: "slide-left 0.5s ease", translateX: "-400px", translateY: "10px" },
        picSeventeen: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picNineteen: { animation: "slide-left 0.5s ease", translateX: "250px", translateY: "10px" },
        picTwenty: { animation: "slide-left 0.5s ease", translateX: "328px", translateY: "10px" },
        picTwentyOne: { animation: "slide-left 0.5s ease", translateX: "-322px", translateY: "10px" },
        picTwentyThree: { animation: "slide-left 0.5s ease", translateX: "250px", translateY: "10px" },
    };

    // Function to reset all pictures to their original state
    window.resetPictures = function() {  // Make the function global by attaching it to `window`
        const pictureElements = container.querySelectorAll(".pictures");
        pictureElements.forEach(picture => {
            picture.classList.remove('moved'); // Remove the "moved" class
            picture.style.animation = ''; // Reset animation
            picture.style.transform = ''; // Reset position
            picture.style.display = 'flex'; // Reset display style

            // Smoothly shrink the picture while sliding back
            picture.style.transform = ''; // Reset transform
            picture.style.width = '30px'; // Shrink width (transitioned smoothly)
            picture.style.height = '30px'; // Shrink height (transitioned smoothly)
        });

        mainContainer.style.visibility = 'hidden'; // Hide the main container
    };

    // Function to handle box clicks
    function handleBoxClick(event) {
        const clickedBox = event.target;

        // Only process clicks on elements with the "pictures" class
        if (clickedBox.classList.contains("pictures")) {
            // Apply the unique transformations for each picture
            const pictureElements = container.querySelectorAll(".pictures");

            pictureElements.forEach(picture => {
                const picId = picture.id;

                // If the picture is clicked again, reset its state and apply new transformations
                if (transformations[picId]) {
                    const transform = transformations[picId];

                    // If it's already moved, do not reset it when clicked
                    if (picture.classList.contains('moved')) {
                        return; // If it's already moved, don't reset
                    } else {
                        // Apply new transformations (slide and resize)
                        picture.classList.add('moved'); // Mark as moved
                        picture.style.animation = transform.animation;
                        picture.style.transform = `translateX(${transform.translateX}) translateY(${transform.translateY})`;

                        picture.style.width = '100px';  // Enlarge
                        picture.style.height = '100px'; // Enlarge

                        picture.style.display = 'absolute';
                        picture.style.top = '200px';

                        // Correctly reference the container to show it
                        mainContainer.style.visibility = "visible"; // Make the container visible
                    }

                    picture.style.animation = ""; // Remove animation to prevent repeating

                    // Once animation ends, apply the final position and stop animation
                    picture.addEventListener("animationend", function () {
                        picture.style.height = '100px';
                        picture.style.width = '100px';
                    }, { once: true });
                }
            });
        }
    }

    // Add event listener to the container to catch clicks on the pictures
    container.addEventListener("click", handleBoxClick);
});

const text1 = "prepared text string, ready to be inserted into the paragraph.";

        const text = "This is a prepared text string, ready to be inserted into the paragraph.";
        let det = 0;  // Track the current state

function flipCard() {
    const theCard = document.getElementById('theCard');
    const toLeftButton = document.getElementById('moveLeft');
    const toRightButton = document.getElementById('moveRight');
    theCard.classList.toggle('flipped'); // Toggle the "flipped" class

    det++;  // Increment det

    // Check if det is odd or even
    if (det % 2 === 0) {  
        toLeftButton.style.visibility = 'visible';  // Show left button for even det
        toRightButton.style.visibility = 'visible';  // Hide right button for even det
    } else {  
        toLeftButton.style.visibility = 'hidden';  // Hide left button for odd det
        toRightButton.style.visibility = 'hidden';  // Show right button for odd det
    }
}


        function setFrontImage(imageUrl) {
            const theFront = document.getElementById('theFront');
            theFront.style.backgroundImage = `url(${imageUrl})`; // Set the background image
            theFront.style.backgroundSize = 'cover'; // Ensure the image covers the entire front
            theFront.style.backgroundPosition = 'center'; // Center the image
        }
        function hideMainContainer() {
            const container = document.querySelector('.mainContainer');
            container.classList.add('hidden'); // Apply the hidden class for pixelation and opacity
            container.classList.remove('visible'); // Ensure it's hidden
        }
        
        // Function to show the main container with smooth entrance
        function showMainContainer() {
            const container = document.querySelector('.mainContainer');
            container.classList.remove('hidden'); // Remove the hidden class
            container.classList.add('visible'); // Apply the visible class for smooth entrance
        }


        let pixelToTurnRed = null; // Initialize as null since it will hold the element reference

        function pixel(pixelIndex) {
            pixelToTurnRed = document.getElementById(pixelIndex); // Get the div element by its ID
        }

        function pixelToRed() {
            if (pixelToTurnRed) { // Check if pixelToTurnRed has been set
                pixelToTurnRed.classList.add('red'); // Add the 'red' class to change background color
                pixelToTurnRed.style.backgroundImage = ''; // Remove the background image
            } else {
                alert('No pixel selected!');
            }
        }
        function putMessages(indexValue) {
            // Define the messages

           
            const picOneM = "Grade 9, ang panahon na tayo'y estranghero sa isa't isa,<br>" +
                            "Walang panulat na nahiram o nasabing salita.<br>" +
                            "Pati pagiging magkagrupo'y hindi ginawa ng tadhana,<br>" +
                            "Ngunit sino ang mag-aakalang ang tadhana'y maglalaro,<br>" +
                            "At muli tayong ipagtatagpo sa daang magkaiba ang dulo?<br>" +
                            "<br>" +
                            "Isa akong binata na lahat ay tinuring na laro,<br>" +
                            "Habang ikaw ay nasa mga mapag-aral na mga tao.<br>" +
                            "Magkasalungat, parang gabi at araw,<br>" +
                            "Ngunit heto tayo, magkahawak-kamay sa parehong tanaw.<br>" +
                            "<br>" +     
                            "Nagsimula sa pagiging estranghero,<br>" +
                            "Tinulungan ng kaibigang tila isang reto.<br>" +
                            "At eto na tayo, walang pag-aalinlangan,<br>" + 
                            "Tayo na ang magkatali hanggang dulo ng kwentong walang hanggan.<br>" +
                            "<br>" +
                            "Hindi ko inasahan ang pagliko ng panahon,<br>" + 
                            "Ngunit ngayo'y hawak ko na ang iyong pag-irog at paglingon.<br>" + 
                            "Pinagtagpo man tayo ng tadhana nang hindi inaasahan,<br>" +
                            "Pangako, hindi ko hahayaang muli tayong paglayuin ng kawalan.<br>";
            const picTwoM = "Bilis ng panahon, dati lang grade 9 tayo, magkasama sa klase, halos hindi nga tayo nagkausap. Tapos, bigla ko na lang naisip na gusto kita, at niligawan kita, mahal ko. Sobrang saya ko na hindi lang ako naging parte ng buhay mo sa simpleng paraan, kundi sa isang mas malalim at mas espesyal na paraan. Gusto ko lang sanang iparating na mahal na mahal kita at sobrang grateful ako na pumayag ka na manligaw ako. Yung mga unang moments natin, yung tanong ko pa na ‘Kung papasok ba ako sa buhay mo, sasang-ayon ka ba?’ Hindi ko alam kung anong magiging sagot mo. Hindi ko alam kung paano ko mapapakita sa’yo ang nararamdaman ko, pero sa simpleng pagsang-ayon mo, doon ko nalaman na worth it ang lahat ng effort at lahat ng paghihirap. At ngayon, andito tayo, mas maligaya, mas masaya sa bawat araw na lumilipas, at alam ko na hindi lang tayo ang may role sa journey na ‘to, kundi ang Diyos na rin. Salamat sa pagtanggap sa akin, sa pagiging bukas at tapat sa ating relasyon, at sa pagmamahal na walang sawa.";             
            const picThreeM = "Naalala ko pa yung first kiss natin na hindi nagtagal kasi nahihiya pa ako. Wala pa kasi akong nahanikan na babae sa lips, kaya't medyo kabado ako. Pero masaya ako na sayo ko binigay ang unang halik na iyon. Mahal na mahal kita, at bawat halik ay nagpapakita ng pagmamahal ko sa’yo. Laging kitang gusto halikan, at sa bawat halik ko sa’yo, mas nararamdaman ko kung gaano kita kamahal. Hindi na ako makapaghintay na  ang ‘I do’ sa harap ng altar at mapakasalan ka. At ang pinaka espesyal na unang halik natin bilang mag-asawa, sa harap ng mga tao, ay isang araw na sabay natin haharapin." 
            const picFourM = "Mahal ko, nung nanliligaw ako, hindi ko alam kung may pag-asa ba ako, pero gusto ko parin tumuloy. Pinakilala mo pa ako sa magulang mo, at masaya ako na mainit nila akong tinanggap. Talaga namang napakasarap ng feeling na makita silang masaya at matanggap ako bilang bahagi ng buhay mo. Gusto ko talaga na maging tayo, at masaya ako na natutuloy ang journey ng panliligaw ko sayo. Ang saya ng bawat sandali ng panliligaw, kasi kahit nung nanliligaw pa lang ako, parang minahal mo na ako tulad ng isang partner. Hindi mo ako pinapabayaan, at pinaparamdam mo sa’kin araw-araw na espesyal ako sa’yo. Hindi ko na kayang ipaliwanag, basta't masaya ako na ikaw ang pinili ko.";
            const picFiveM = "May mga sandali sa atin na hindi na kailangang magsalita pa. Isang sulyap, isang ngiti na pareho nating ibinabalik, o kahit yung paraan ng paghahawak mo sa kamay ko, yun na ang lahat ng kailangan kong malaman. Parang may sarili tayong wika, isang wika na tayo lang ang nakakaintindi. Hindi ko na kailangang marinig na 'I love you' para maramdaman ang pagmamahal mo, dahil ang mga ginagawa mo para sa’kin ay mas malakas pa sa mga salitang iyon. Yun ang mga sandali na pinaka-treasured ko, yung pakiramdam na tumigil ang oras, para lang sa atin. Sa mga tahimik at payapang sandali na yun, doon ko nalamdaman na hindi na namin kailangan ng kahit anong dagdag, kasi sapat na ang koneksyon natin. Ang relasyon natin, ay nagsasalita para sa sarili nito.";
            const picSixM = "Naalala ko, ikaw pa ang pinakaunang nag-sabi ng 'I love you' o 'I admired you,' basta nararamdaman ko na gusto mo ako. Pero ngayon, libo-libo na ata ang 'I love you' na nasabi natin sa isa’t isa. Tatlong salita lang ‘yun, pero napakalaki ng ibig sabihin. Masaya talaga ako na sayo ko sinasabi ang salitang yun. Mahal ko, mahal na mahal kita, at mamahalin kita palagi. Tandaan mo, ikaw ang minahal, mahal, at mamahalin pa.";
            const picSevenM = "PAHINGA SA PAHINA <br><br><br>Gusto kong magbasa<br>ng libo-libong pahina<br>ng libro para makapagpahinga<br>Pero mas gugustuhin kong basahin ang ating pahina<br>sa kwento nating dalawa<br>Dahil ang isa't isa ay ating pahinga.";
            const picEightM = "Ang museum date natin ay perpekto, kasi kasama kita. Ang dami nating kuha at maraming alaala ang nabuo—dalawang beses pa nga tayong pumunta doon! Sobrang nag-enjoy ako, mahal ko. Salamat at ginusto mong sumama, at pumayag sila Nanay. Ang daming napakagandang bagay sa museum, pero ikaw pa rin ang pipiliin ko kahit anong mangyari. Mahal na mahal kita, mahal ko.";
            const picNineM = "The day I realized that you had become my home, my safe place. It’s amazing how someone can come into your life and completely change the way you see the world.";
            const picTenM = "Thank you for your smile, that has the power to brighten the darkest days. It’s the first thing I look for in the morning, and the last thing I think of before I sleep.";
            const picElevenM = "Thank you for always being there for me, through thick and thin. Your support means more to me than words can express, and it’s something I’ll never take for granted.";
            const picTwelveM = "The way you comfort me when I’m feeling down. Your presence alone makes everything feel better, and I’m endlessly grateful for the love you always give me.";
            const picThirteenM = "Thank you for your warm welcome as family. The way you made me feel at home from the very first time we met your family is something I’ll never forget.";
            const picFourteenM = "Your loving family, who made me feel like I belonged. I’ve learned so much from them, and I’m so thankful for the kindness and warmth they’ve shown me.";
            const picFifteenM = "You acting as my mother. Your care, your concern, and your nurturing spirit are things that I cherish deeply. It’s a rare gift, and I’m so lucky to have it in you.";
            const picSixteenM = "The way you make me feel so special, every single day. Whether through your words, your actions, or just your presence, you have a way of making everything feel extraordinary.";
            const picSeventeenM = "The little moments we share, those unspoken words, and the quiet comfort of being together. It’s these things that make our bond so strong, and I wouldn’t trade them for anything.";
            const picEighteenM = "Your laughter, that fills the room with joy. It’s contagious, and I find myself smiling just by hearing it. It’s a sound that I’ll always hold dear.";
            const picNineteenM = "The way you listen, really listen, when I need someone to talk to. It’s something so simple but so rare, and I’m grateful every day for your understanding and compassion.";
            const picTwentyM = "Our shared dreams, the goals we talk about and work towards together. It’s amazing to think of the future we’re building, and I can’t wait to see where it takes us.";
            const picTwentyOneM = "The comfort of knowing that no matter what happens, we have each other. It’s the kind of love that gives me strength, and I know I can face anything as long as you’re by my side.";
            const picTwentyTwoM = "The way you challenge me to be a better person, without even trying. Your love pushes me to grow, to improve, and to become the best version of myself.";
            const picTwentyThreeM = "The moments when we’re just sitting together, not needing to say anything, because being with you is enough. It’s a quiet kind of love that speaks volumes.";
            const picTwentyFourM = "And finally, thank you for loving me. For every hug, every kiss, and every word of encouragement. For making me feel like the luckiest person alive.";
            
            // Get the textDisplay element
            const textDisplay = document.getElementById('textDisplay');
        
            // Use the value passed (picOneM, picTwoM) to display the correct message
            if (indexValue === 'picOneM') {
                textDisplay.innerHTML = picOneM;
            } else if (indexValue === 'picTwoM') {
                textDisplay.textContent = picTwoM;
            } else if (indexValue === 'picThreeM') {
                textDisplay.textContent = picThreeM;
            } else if (indexValue === 'picFourM') {
                textDisplay.textContent = picFourM;
            } else if (indexValue === 'picFiveM') {
                textDisplay.textContent = picFiveM;
            } else if (indexValue === 'picSixM') {
                textDisplay.textContent = picSixM;
            } else if (indexValue === 'picSevenM') {
                textDisplay.innerHTML = picSevenM;
            } else if (indexValue === 'picEightM') {
                textDisplay.innerHTML = picEightM;
            } else if (indexValue === 'picNineM') {
                textDisplay.textContent = picNineM;
            } else if (indexValue === 'picTenM') {
                textDisplay.textContent = picTenM;
            } else if (indexValue === 'picElevenM') {
                textDisplay.textContent = picElevenM;
            } else if (indexValue === 'picTwelveM') {
                textDisplay.textContent = picTwelveM;
            } else if (indexValue === 'picThirteenM') {
                textDisplay.textContent = picThirteenM;
            } else if (indexValue === 'picFourteenM') {
                textDisplay.textContent = picFourteenM;
            } else if (indexValue === 'picFifteenM') {
                textDisplay.textContent = picFifteenM;
            } else if (indexValue === 'picSixteenM') {
                textDisplay.textContent = picSixteenM;
            } else if (indexValue === 'picSeventeenM') {
                textDisplay.textContent = picSeventeenM;
            } else if (indexValue === 'picEighteenM') {
                textDisplay.textContent = picEighteenM;
            } else if (indexValue === 'picNineteenM') {
                textDisplay.textContent = picNineteenM;
            } else if (indexValue === 'picTwentyM') {
                textDisplay.textContent = picTwentyM;
            } else if (indexValue === 'picTwentyOneM') {
                textDisplay.textContent = picTwentyOneM;
            } else if (indexValue === 'picTwentyTwoM') {
                textDisplay.textContent = picTwentyTwoM;
            } else if (indexValue === 'picTwentyThreeM') {
                textDisplay.textContent = picTwentyThreeM;
            } else if (indexValue === 'picTwentyFourM') {
                textDisplay.textContent = picTwentyFourM;
            }
            
        }
        let currentIndex = 0;  // Keep track of the current image index
let folderToAccess = null;  // Initialize the folder path
let slideshowInterval = null;  // To store the interval and clear it if needed

const images = [
    'img1.jpg'
    // Add more images here
];

// Function to change the slider image to the left
function sliderPictureToLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // Wrap around using modulo operator
    updateSliderImage();
}

// Function to change the slider image to the right
function sliderPictureToRight() {
    currentIndex = (currentIndex + 1) % images.length;  // Wrap around using modulo operator
    updateSliderImage();
}

// Update the slider image based on the current index
function updateSliderImage() {
    const slider = document.getElementById('theFront');
    if (folderToAccess && images.length > 0) {
        slider.style.backgroundImage = 'url(' + folderToAccess + '/' + images[currentIndex] + ')';  // Set the background image
    } else if (folderToAccess && images.length < 0) {
        slider.style.backgroundImage = '';
    }
}

// Function to start the automatic slideshow
function startSlideshow() {
    // Set the interval for automatic image change (every 3 seconds)
    slideshowInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;  // Go to the next image
        updateSliderImage();
    }, 3000);  // Change image every 3 seconds
}

// Function to stop the automatic slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);  // Stop the interval
}

// Start the slideshow when the page loads
window.onload = function() {
    startSlideshow();  // Start the slideshow automatically when the page loads
};



// Call this function when the image path is set dynamically (e.g., by the pixel function or other methods)
function setFolderPath(path) {
    folderToAccess = path;  // Set the folder path dynamically
    currentIndex = 0;  // Reset to the first image in the folder
    updateSliderImage();  // Display the first image in the folder
}

const fullscreenButton = document.getElementById('fullscreenButton');
const moveLeft = document.getElementById('moveLeft');

fullscreenButton.addEventListener('click', () => {
  mainContainer.classList.toggle('Full');
  theCard.classList.toggle('Full');
  textDisplay.classList.toggle('Full');
  fullscreenButton.classList.toggle('Full');
  moveLeft.classList.toggle('Full');    
  moveRight.classList.toggle('Full');
});

function setMusic(music) {
    const srcMusic = document.getElementById('srcMusic');
    const audioPlayer = document.getElementById('audioPlayer');
    srcMusic.src = music;   // Set the `src` attribute
    audioPlayer.load();     // Reload the audio player to apply the new source
    audioPlayer.volume = 0.5; // Set volume to half
    audioPlayer.play();
       
}


        

        

        


