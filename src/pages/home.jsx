import myPhoto from '../assets/IMG_3974.jpg';
import ContactForm from '../ContactForm';
import Footer from '../footer';


function Home () {

    return (
        <>
        <img src={myPhoto} alt="Image of myself" className='self-image'/>
        <p className='description'>Hello, my name is Jade Craft! I am an aspiring software engineer. I am continuously looking for ways to grow my skills. Below are links to my contacts and a contact form. I look forward to possibly hearing from you, thank you!</p>
        <ContactForm />
        <Footer />
        </>
    )
}

export default Home