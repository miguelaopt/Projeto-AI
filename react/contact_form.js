// pagina em react para o contacto

const ContactForm = () => {
    // 1. ESTADO DO IDIOMA
    const [lang, setLang] = React.useState(localStorage.getItem('royal_lang') || 'pt');

    // 2. EFEITO PARA MUDANÇA DE IDIOMA
    React.useEffect(() => {
        const handleLangChange = () => {
            setLang(localStorage.getItem('royal_lang') || 'pt');
        };
        // Escuta o evento personalizado
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    // Acede às traduções globais (window.translations)
    const t = window.translations ? window.translations[lang] : {};

    // 3. ESTADOS DO FORMULÁRIO
    const [formData, setFormData] = React.useState({
        nome: '', motivo: 'informacao', email: '', telefone: '', mensagem: ''
    });
    const [errors, setErrors] = React.useState({});
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpa o erro assim que o utilizador começa a corrigir
        if(errors[name]) setErrors(prev => ({...prev, [name]: null}));
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;
        
        // Define se é PT para escolher a mensagem
        const isPt = lang === 'pt';

        if (!formData.nome.trim()) { 
            tempErrors.nome = isPt ? "O nome é obrigatório." : "Name is required."; 
            isValid = false; 
        }
        
        // Regex simples para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) { 
            tempErrors.email = isPt ? "Por favor insira um email válido." : "Please enter a valid email."; 
            isValid = false; 
        }
        
        const phoneRegex = /^[0-9]{9,}$/;
        if (!formData.telefone || !phoneRegex.test(formData.telefone)) { 
            tempErrors.telefone = isPt ? "Mínimo 9 dígitos." : "Min 9 digits."; 
            isValid = false; 
        }
        
        if (!formData.mensagem.trim()) { 
            tempErrors.mensagem = isPt ? "Escreva uma mensagem." : "Write a message."; 
            isValid = false; 
        }
        
        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        setStatus('');
        
        if (validate()) {
            try {
                const storedData = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                const newSubmission = { ...formData, date: new Date().toISOString() };
                storedData.push(newSubmission);
                localStorage.setItem('contactSubmissions', JSON.stringify(storedData));
                
                setStatus('success');
                // Limpar formulário após envio
                setFormData({ nome: '', motivo: 'informacao', email: '', telefone: '', mensagem: '' });
            } catch (err) { setStatus('error'); }
        } else { 
            setStatus('error'); 
        }
    };

    return (
        <section className="contact-section">
            <h2 className="section-title">{t.form_title || "Fale Connosco"}</h2>

            {status === 'success' && <div className="alert success">{lang === 'pt' ? "Enviado com sucesso!" : "Sent successfully!"}</div>}
            {status === 'error' && Object.keys(errors).length > 0 && <div className="alert" style={{color: '#ff4444'}}>{lang === 'pt' ? "Corrija os erros assinalados." : "Please fix the errors below."}</div>}

            {/* ADICIONADO: noValidate para desligar o popup do navegador */}
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                    <label>{t.form_name || "Nome:"}</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} className={errors.nome ? 'error-border' : ''} />
                    {errors.nome && <span className="error-msg">{errors.nome}</span>}
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>{t.form_motive || "Motivo:"}</label>
                        <select name="motivo" value={formData.motivo} onChange={handleChange}>
                            <option value="informacao">{lang === 'pt' ? "Informação" : "Information"}</option>
                            <option value="reclamacao">{lang === 'pt' ? "Reclamação" : "Complaint"}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{t.form_phone || "Telefone:"}</label>
                        <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} className={errors.telefone ? 'error-border' : ''} />
                        {errors.telefone && <span className="error-msg">{errors.telefone}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label>{t.form_email || "Email:"}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error-border' : ''} />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>{t.form_msg || "Mensagem:"}</label>
                    <textarea name="mensagem" rows="5" value={formData.mensagem} onChange={handleChange} className={errors.mensagem ? 'error-border' : ''}></textarea>
                    {errors.mensagem && <span className="error-msg">{errors.mensagem}</span>}
                </div>

                <button type="submit" className="btn-submit">{t.form_btn || "Enviar"}</button>
            </form>
        </section>
    );
};

const rootElement = document.getElementById('react-contact-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ContactForm />);
}