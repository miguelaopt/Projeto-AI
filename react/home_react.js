/* js/contact.js */

const ContactForm = () => {
    // Estado para o idioma atual
    const [lang, setLang] = React.useState(localStorage.getItem('royal_lang') || 'pt');
    
    // 👇 NOVO: Efeito para escutar a mudança de idioma
    React.useEffect(() => {
        const handleLangChange = () => {
            setLang(localStorage.getItem('royal_lang') || 'pt');
        };
        // Escuta o evento criado no ficheiro translations.js
        window.addEventListener('languageChange', handleLangChange);
        
        // Limpeza
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    // Acede aos textos globais (objeto translations que criámos)
    const t = window.translations ? window.translations[lang] : {};

    // ... (Mantenha os estados formData, errors, status iguais) ...
    const [formData, setFormData] = React.useState({
        nome: '', motivo: 'informacao', email: '', telefone: '', mensagem: ''
    });
    // ...

    return (
        <section className="contact-section">
            {/* Use as variáveis t.nomedachave */}
            <h2 className="section-title">{t.form_title || "Fale Connosco"}</h2>
            
            {/* ... alertas ... */}
            
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>{t.form_name || "Nome:"}</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>{t.form_motive || "Motivo:"}</label>
                    <select name="motivo" value={formData.motivo} onChange={handleChange}>
                        {/* Se quiser traduzir as opções, adicione ao translations.js também */}
                        <option value="informacao">Informação</option>
                        <option value="reclamacao">Reclamação</option>
                        <option value="reserva">Reserva</option>
                    </select>
                </div>
                
                {/* ... inputs email e telefone ... */}
                
                <div className="form-group">
                    <label>{t.form_msg || "Mensagem:"}</label>
                    <textarea name="mensagem" rows="4" value={formData.mensagem} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn-submit">{t.form_btn || "Enviar"}</button>
            </form>
        </section>
    );
};
// ... render ...
// Renderizar o componente na div que criámos no HTML
const rootElement = document.getElementById('react-contact-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ContactForm />);
}