import { BASE_URL } from "@/constants/baseUrl";

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Política de Privacidade',
		description: 'A Real está comprometida em proteger a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
		alternates: {
			canonical: `${BASE_URL}/politica-de-privacidade`,
		},
	};
}


export default function PoliticaDePrivacidade() {
	return (
		<main className="pt-14 pb-40">
			<div className="container">
				<article className="flex flex-col gap-5">
					<h1 className="font-bold text-4xl">Política de Privacidade</h1>
					<div className="flex flex-col gap-5">
						<div>
							<h2 className="font-bold">1. Introdução</h2>
							A Real está comprometida em proteger a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
						</div>

						<div>
							<h2 className="font-bold text-lg">2. Coleta de Dados Pessoais</h2>
							<p>Coletamos os seguintes tipos de dados pessoais:</p>
							<ul>
								<li>- Informações de Contato: nome, endereço de e-mail, número de telefone e outras informações pessoais fornecidas diretamente através do site.</li>
								<li>- Dados de Navegação: endereço IP, localização geográfica, tipo de navegador, duração da visita e páginas visitadas, tempo de navegação e cookies.</li>
								<li>- Dados Fornecidos Voluntariamente: informações fornecidas por você ao preencher formulários em nosso site.</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-lg">3. Uso dos Dados Pessoais</h2>							
							<p>Utilizamos seus dados pessoais para:</p>
							<ul>
								<li>- Prestar Serviços: Utilizamos seus dados para processar pedidos, responder a consultas e fornecer suporte ao cliente.</li>
								<li>- Comunicação: enviar comunicações sobre atualizações, promoções e novidades, mediante seu consentimento.</li>
								<li>- Melhoria do Site: analisar como você utiliza nosso site para melhorar nossos serviços e conteúdo, bem como a experiência do usuário.</li>
								<li>- Segurança: garantir a segurança e prevenir fraudes.</li>
							</ul>					
						</div>
						<div>
							<h2 className="font-bold text-lg">4. Compartilhamento de Dados Pessoais</h2>
							<p>Compartilhamos seus dados pessoais apenas com:</p>
							<ul>
								<li>- Prestadores de Serviços: terceiros que nos ajudam a fornecer nossos serviços (por exemplo, provedores de hospedagem).</li>
								<li>- Autoridades Legais: Quando exigido por lei, podemos compartilhar suas informações com autoridades competentes.</li>
							</ul>			
						</div>
						<div>
							<h2 className="font-bold text-lg">5. Proteção de Dados Pessoais</h2>
							<p>Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, uso indevido, divulgação e perda, ou qualquer forma de tratamento inadequado.</p>
						</div>
						<div>
							<h2 className="font-bold text-lg">6. Seus Direitos</h2>
							<p>Você tem o direito de:</p>
							<ul>
								<li>- Acessar seus Dados: solicitar uma cópia dos dados pessoais que mantemos sobre você.</li>
								<li>- Corrigir seus Dados: corrigir quaisquer dados pessoais imprecisos ou incompletos.</li>
								<li>- Anonimização, bloqueio ou eliminação: solicitar a anonimização, bloqueio ou exclusão de seus dados pessoais, desde que não sejamos obrigados a mantê-los por lei.</li>
								<li>- Retirar Consentimento: retirar seu consentimento para o processamento de seus dados pessoais a qualquer momento.</li>
								<li>- Portabilidade: Pode solicitar a transferência dos seus dados para outro fornecedor de serviço.</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-lg">7. Retenção de Dados:</h2>
							<p>Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei.</p>
						</div>
						<div>
							<h2 className="font-bold">8. Alterações nesta Política de Privacidade</h2>
							<p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas através do nosso site ou outros meios de comunicação.</p>
						</div>
						<div>
							<h2 className="font-bold">9. Contato</h2>
							<p>Se você tiver qualquer dúvida ou solicitação relacionada a esta Política de Privacidade, entre em contato conosco através do e-mail <a href="mailto:sac@bateriasreal.com.br" className="text-[#DF0209] hover:underline">sac@bateriasreal.com.br</a> ou telefone <a href="tel:+554635431178" className="text-[#DF0209] hover:underline">46 3543-1178.</a></p>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}