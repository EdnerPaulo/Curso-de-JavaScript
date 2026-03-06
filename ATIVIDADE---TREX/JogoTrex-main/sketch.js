var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

var gameOver, restart;


// inicio 
function preload(){
    trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
    trex_collided = loadAnimation('trex_collided.png');
    //para caregar as imagem da animação do jogo 
    
    groundImage = loadImage('ground2.png');
    //para caregar as imagem do fundo do jogo 
    
    cloudImage =  loadImage('cloud.png');
    //para caregar as imagem das nuvens do jogo 
    
    obstacle1 =  loadImage('obstacle1.png');
    obstacle2 =  loadImage('obstacle2.png');
    obstacle3 =  loadImage('obstacle3.png');
    obstacle4 =  loadImage('obstacle4.png');
    obstacle5 =  loadImage('obstacle5.png');
    obstacle6 =  loadImage('obstacle6.png');
    //para caregar as imagem dos obtaculos  do jogo 
    
    restartImg = loadImage('restart.png');
    gameOverImg = loadImage('gameOver.png');

    jumpSound = loadSound('jump.mp3');
    dieSound= loadSound('die.mp3');
    checkPointSound = loadSound('checkpoint.mp3');

}
function setup(){
    createCanvas(600,200);

    // let message = 'Teste';
    // console.log(message)

    trex = createSprite(200,180,400,20);
    trex.addAnimation("running",trex_running);
    trex.addAnimation("collided",trex_collided);

    trex.scale= 0.5;

    ground = createSprite(200,180,400,20);
    ground.addAnimation("ground",groundImage);
    ground.x = ground.width/2; 

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOverImg);

    restart = createSprite(300,100);
    restart.addImage(restartImg);

    gameOver.scale = 0.5;
    restart.scale = 0.5;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    //criar grupos de sprites com o mesmo comportamento 

    obstaclesGroup = createGroup();
    cloudsGroup = createGroup();

    score = 0;
}

function draw(){
    background('yellow')

    text('Pontuação: '+ score,500,50)
    // estado do jogo
    if(gameState === PLAY){
        gameOver.visible= false;
        restart.visible= false;

        //chão infinito
        ground.velocityX= -(4+3*score/100);

        score = score + Math.random(getFrameRate()/60);

        if(score > 0 && score % 100 === 0){
            checkPointSound.play();
        }

        if(ground.x > 0 ){
            ground.x = ground.width/2;
        }
        // trex pulando
        if(keyDown('space')){
            trex.velocityY = -12;
            jumpSound.play();
        }
        trex.velocityY = trex.velocityY + 0.08;

        //função para criar grupo de nuvens
        clouds()


    }

    drawSprites();
}

function clouds(){
    if(frameCount %70 === 0 ){
        let cloud = createSprite(600,220,40,15);
        cloud.y= Math.random(random(200,300));
        cloud.addImage(cloudImage);
        cloud.scale = 0.5;
        cloud.velocityX= - 3;
        cloud.lifetime = 200;

        cloud.depth = text.depth;
        trex.depth = trex.depth + 1 ;

    }
}

function obstacle(){
    if(frameCount %70 === 0 ){
        let obstacle = createSprite(600,165,10,40);
        obstacle.x= -(6 + score/100);
        let rand = Math.random(random(1,6));
        switch (rand){
            case 1:
                obstacle.addImage(obstacle1)
                break 
            case 2:
                obstacle.addImage(obstacle2)
                break 
            case 3:
                obstacle.addImage(obstacle3)
                break 
            case 4:
                obstacle.addImage(obstacle4)
                break 
            case 5:
                obstacle.addImage(obstacle5)
                break 
            case 6:
                obstacle.addImage(obstacle6)
                break 
            default:break
            }
        obstacle.scale = 0.5;
        obstacle.velocityX= - 3;
        obstacle.lifetime = 200;

        obstacle.depth = text.depth;
        trex.depth = trex.depth + 1 ;
    }
}