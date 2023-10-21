import Album from './Albums';
import './App.css';

const App = () => {
  const albums = [
    { image: "https://upload.wikimedia.org/wikipedia/en/a/ac/Prince_-_For_You.jpg", alt: "For You", title: "For You", year: "April 7, 1978"},
    { image: "https://upload.wikimedia.org/wikipedia/en/2/21/Prince_-_Prince.jpg", alt: "Prince", title: "Prince", year: "October 19, 1979"},
    { image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Prince_-_Dirty_Mind.jpg", alt: "Dirty Mind", title: "Dirty Mind", year: "October 8, 1980"},
    { image: "https://upload.wikimedia.org/wikipedia/en/d/db/Prince-Controversy.jpg", alt: "Controversy", title: "Controversy", year: "October 14, 1981"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Prince_-1999.jpg", alt: "1999", title: "1999", year: "October 27, 1982"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg", alt: "Purple Rain", title: "Purple Rain", year: "June 25, 1984"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c0/Prince_Around.jpg", alt: "Around the World in a Day", title: "Around the World in a Day", year: "April 22, 1985"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c6/ParadeLP.jpg", alt: "Parade", title: "Parade", year: "March 31, 1986"},
    { image: "https://upload.wikimedia.org/wikipedia/en/1/16/Prince-SignOTheTimes.jpg", alt: "Sign o' the Times", title: "Sign o' the Times", year: "March 30, 1987"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/94/Prince-Lovesexy.jpg", alt: "Lovesexy", title: "Lovesexy", year: "May 10, 1988"},
    { image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Prince_-_Batman_%28Motion_Picture_Soundtrack%29.jpg", alt: "Batman", title: "Batman", year: "June 20, 1989"},
    { image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Prince_Graffiti.jpg", alt: "Graffiti Bridge", title: "Graffiti Bridge", year: "August 20, 1990"},
    { image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Prince_Diamonds.jpg", alt: "Diamonds and Pearls", title: "Diamonds and Pearls", year: "October 1, 1991"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Love_Symbol_Album_%28Prince_and_the_New_Power_Generation_album_-_cover_art%29.jpg", alt: "Love Symbol", title: "Love Symbol", year: "October 13, 1992"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/ce/The_Hits_The_B-Sides.png", alt: "The Hits/The B-Sides", title: "The Hits/The B-Sides", year: "September 10, 1993"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/99/Prince_Come.jpg", alt: "Come", title: "Come", year: "August 16, 1994"},
    { image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Black_Album%2C_US%2C_1994.jpg", alt: "The Black Album", title: "The Black Album", year: "November 22, 1994"},
    { image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Prince_-_The_Versace_Experience.png", alt: "The Versace Experience", title: "The Versace Experience", year: "July 8, 1995"},
    { image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Prince_Gold.jpg", alt: "The Gold Experience", title: "The Gold Experience", year: "September 26, 1995"},
    { image: "https://upload.wikimedia.org/wikipedia/en/1/13/Prince_G6.jpg", alt: "Girl 6", title: "Girl 6", year: "March 19, 1996"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c4/Princechaos.jpg", alt: "Chaos and Disorder", title: "Chaos and Disorder", year: "July 9, 1996"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Prince_emanc.jpg", alt: "Emancipation", title: "Emancipation", year: "November 19, 1996"},
    { image: "https://upload.wikimedia.org/wikipedia/en/8/87/Crystall_Ball_%28Prince_box_set_-_cover_art%29.jpg", alt: "Crystal Ball", title: "Crystal Ball", year: "January 29, 1998"},
    { image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Prince_Vault.jpg", alt: "The Vault: Old Friends 4 Sale", title: "The Vault: Old Friends 4 Sale", year: "August 24, 1999"},
    { image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Prince_Rave.jpg", alt: "Rave Un2 the Joy Fantastic", title: "Rave Un2 the Joy Fantastic", year: "November 9, 1999"},
    { image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Prince_Rave_In2.jpg", alt: "Rave In2 the Joy Fantastic", title: "Rave In2 the Joy Fantastic", year: "April 30, 2001"},
    { image: "https://upload.wikimedia.org/wikipedia/en/5/57/Prince_Very.jpg", alt: "The Very Best of Prince", title: "The Very Best of Prince", year: "July 31, 2001"},
    { image: "https://upload.wikimedia.org/wikipedia/en/b/bb/Prince_Rainbow.jpg", alt: "The Rainbow Children", title: "The Rainbow Children", year: "November 20, 2001"},
    { image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Prince_Alone_Piano.jpg", alt: "One Nite Alone...", title: "One Nite Alone...", year: "May 14, 2002"},
    { image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Prince_xpectation_250-.jpg", alt: "Xpectation", title: "Xpectation", year: "January 1, 2003"},
    { image: "https://upload.wikimedia.org/wikipedia/en/6/62/Prince_News.jpg", alt: "N·E·W·S", title: "N·E·W·S", year: "May 26, 2003"},
    { image: "https://upload.wikimedia.org/wikipedia/en/7/77/Prince_cnote_250.jpg", alt: "C-Note", title: "C-Note", year: "March 29, 2004"},
    { image: "https://upload.wikimedia.org/wikipedia/en/8/84/MusicologyCover.jpg", alt: "Musicology", title: "Musicology", year: "March 29, 2004"},
    { image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Prince_chocolate_250.jpg", alt: "The Chocolate Invasion", title: "The Chocolate Invasion", year: "March 29, 2004"},
    { image: "https://upload.wikimedia.org/wikipedia/en/7/78/Prince_slaughter_250.jpg", alt: "The Slaughterhouse", title: "The Slaughterhouse", year: "March 29, 2004"},
    { image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Prince_-_3121.jpg", alt: "3121", title: "3121", year: "March 21, 2006"},
    { image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ultimate_Prince.jpg", alt: "Ultimate Prince", title: "Ultimate Prince1", year: "August 22, 2006"},
    { image: "https://upload.wikimedia.org/wikipedia/en/0/05/PlanetearthPRINCE.jpg", alt: "Planet Earth", title: "Planet Earth", year: "July 15, 2007"},
    { image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Indigo_Nights.jpg", alt: "Indigo Nights", title: "Indigo Nights", year: "September 30, 2008"},
    { image: "https://upload.wikimedia.org/wikipedia/en/8/8b/PrinceLotusFlow3r.jpg", alt: "Lotusflow3r", title: "Lotusflow3r", year: "March 24, 2009"},
    { image: "https://upload.wikimedia.org/wikipedia/en/1/17/Prince20ten.jpg", alt: "20Ten", title: "20Ten", year: "July 10, 2010"},
    { image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Plectrumelectrum_Album_Cover.png", alt: "Plectrumelectrum", title: "Plectrumelectrum", year: "September 26, 2014"},
    { image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Art_Official_Age.jpg", alt: "Art Official Age", title: "Art Official Age", year: "September 26, 2014"},
    { image: "https://upload.wikimedia.org/wikipedia/en/7/78/PrinceHitnrun.jpeg", alt: "Hit n Run Phase One", title: "Hit n Run Phase One", year: "September 7, 2015"},
    { image: "https://upload.wikimedia.org/wikipedia/en/e/e7/HitnRun_Phase_Two.jpg", alt: "Hit n Run Phase Two", title: "Hit n Run Phase Two", year: "December 12, 2015"},
    { image: "https://upload.wikimedia.org/wikipedia/en/8/8f/4everCover.JPG", alt: "4Ever", title: "4Ever", year: "November 22, 2016"},
    { image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Prince_-_Anthology_1995%E2%80%932010.jpg", alt: "Anthology: 1995–2010", title: "Anthology: 1995–2010", year: "August 17, 2018"},
    { image: "https://upload.wikimedia.org/wikipedia/en/4/40/Piano_and_a_Microphone_1983.jpg", alt: "Piano and a Microphone 1983", title: "Piano and a Microphone 1983", year: "September 21, 2018"},
    { image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Prince_-_Originals.png", alt: "Originals", title: "Originals", year: "June 7, 2019"},
    { image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Prince_-_Welcome_2_America.png", alt: "Welcome 2 America", title: "Welcome 2 America", year: "July 30, 2021"},
  ]
  return (
    <>
    <h1 className='name'>Prince</h1>
    <p className='subtitle'>A Lifetime of Music</p>
    
    <div className='albumlist'>
      {albums.map((album, key) => {
        return <Album image={album.image} alt={album.alt} title={album.title} year={album.year}/>
      })}
    </div>
    </>
  )
}

export default App;
