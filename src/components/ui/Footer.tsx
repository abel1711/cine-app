import { AiOutlineLinkedin } from 'react-icons/ai';
import {FaGithub, FaWhatsapp } from 'react-icons/fa';
import {RiMailSendLine} from 'react-icons/ri';

export const Footer = () => {
  const size = '3rem';
  return (
    <>
    <hr />
    <h5 className='text-center'><i>by</i> Abel Amieva</h5>
      <div className='container-footer'>
      <a href="https://www.linkedin.com/in/abel-aron-amieva-876416215/" target={'_blank'}  rel='noreferrer'>
        <AiOutlineLinkedin size={ size } />
      </a>
      <a href="https://github.com/abel1711" target={'_blank'}  rel='noreferrer'>
        <FaGithub size={ size } />
      </a>
      <a href="mailto:abelamieva@gmail.com?Subject=Quiero%20que%20trabajes%20para%20MI!!%20jaja" rel='noreferrer'>
        <RiMailSendLine size={ size } />
      </a>
      <a href="https://bit.ly/3le8dC7" target={'_blank'} rel="noreferrer">
        <FaWhatsapp size={ size }/>
      </a>

    </div>
    </>
  )
}
