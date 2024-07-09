'use client'
import CookieConsent from 'react-cookie-consent';

export function Cookies() {
	return (
		<>
			<CookieConsent
				location="bottom"
				buttonText="Aceitar"
				cookieName="myAppCookieConsent"
				style={{ background: "#fff" }}
				buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
				expires={150}
			>
				<h2 className='text-black'>Utilizamos cookies em nosso site para oferecer a você uma melhor experiência conforme nossa <a href="" className='text-[#DF0209] hover:underline'>Política de Privacidade</a>. Ao continuar navegando você concorda com estas condições.</h2>
			</CookieConsent>
		</>
	);
}