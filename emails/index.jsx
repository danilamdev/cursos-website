import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Hr,
  Tailwind
} from '@react-email/components';




export const EmailCursos = ({ nombre='daniel', email='dalambarri@hotmail.com', mensaje='hola como estas'}) => (
      <Tailwind>
        <Html>
          <Head />
          <Preview>Log in with this magic link</Preview>

          <Body className='container bg-white font-sans py-20'>
            <Container className='bg-slate-50/40 rounded-lg p-10'>
              <Container className='text-center'>
                <Text className='text-4xl font-bold text-slate-800'>Cursos de Extension</Text>
                <Text className='text-xl text-blue-600 font-bold'>Nuevo mensaje</Text>
                <div className='py-px w-full bg-slate-300 rounded'></div>
              </Container>
              
                <Container className='mt-24 text-base w-full p-5'>
                  <p className='text-slate-600'><strong className='text-blue-600 font-bold'>nombre: </strong>{nombre}</p>
                  <Hr></Hr>
                  <p className='text-slate-600'><strong className='text-blue-600 font-bold'>Email: </strong>{email}</p>
                  <Hr></Hr>
                  <p className='text-slate-600'><strong className='text-blue-600 font-bold'>Mensaje: </strong>{mensaje}</p>
                </Container>
            </Container>

          </Body>
        </Html>
      </Tailwind>
);

export default EmailCursos;


