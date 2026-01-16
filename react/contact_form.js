/* react/contact_form.js */

const ContactForm = () => {
    // 1. STATEFUL COMPONENT
    const [formData, setFormData] = React.useState({
        nome: '',
        motivo: 'informacao',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const [errors, setErrors] = React.useState({});
    const [status, setStatus] = React.useState(''); // success | error

    // Atualizar inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpa erro ao digitar
        if(errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    // 2. VALIDAÇÃO
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.nome.trim()) {
            tempErrors.nome = "O nome é obrigatório.";
            isValid = false;
        }

        // Regex simples de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            tempErrors.email = "Insira um email válido.";
            isValid = false;
        }

        // Telefone (opcional ser apenas números, min 9 digitos)
        const phoneRegex = /^[0-9]{9,}$/;
        if (!formData.telefone || !phoneRegex.test(formData.telefone)) {
            tempErrors.telefone = "Insira um telefone válido (min 9 dígitos).";
            isValid = false;
        }

        if (!formData.mensagem.trim()) {
            tempErrors.mensagem = "A mensagem não pode estar vazia.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('');

        if (validate()) {
            // 3. ARMAZENAR NO LOCAL STORAGE
            try {
                // Recupera submissões anteriores ou cria array vazio
                const storedData = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                const newSubmission = { ...formData, date: new Date().toISOString() };
                
                storedData.push(newSubmission);
                localStorage.setItem('contactSubmissions', JSON.stringify(storedData));

                setStatus('success');
                setFormData({ nome: '', motivo: 'informacao', email: '', telefone: '', mensagem: '' }); // Reset
                
                // (Opcional) Log para verificar
                console.log("Dados guardados no LocalStorage:", storedData);

            } catch (err) {
                console.error(err);
                setStatus('error');
            }
        } else {
            setStatus('error');
        }
    };

    return (
        <section className="contact-section">
            <h2 className="section-title">Formulário de Contacto</h2>

            {status === 'success' && (
                <div className="alert success">Mensagem enviada e guardada com sucesso!</div>
            )}
            {status === 'error' && Object.keys(errors).length > 0 && (
                <div className="alert" style={{color: '#ff4444'}}>Por favor corrija os erros abaixo.</div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Nome */}
                <div className="form-group">
                    <label>Nome Completo:</label>
                    <input 
                        type="text" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleChange} 
                        className={errors.nome ? 'error-border' : ''}
                    />
                    {errors.nome && <span className="error-msg">{errors.nome}</span>}
                </div>

                {/* Motivo e Telefone na mesma linha */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Motivo:</label>
                        <select name="motivo" value={formData.motivo} onChange={handleChange}>
                            <option value="informacao">Pedido de Informação</option>
                            <option value="reclamacao">Reclamação</option>
                            <option value="sugestao">Sugestão</option>
                            <option value="reserva">Reserva</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Telefone:</label>
                        <input 
                            type="tel" 
                            name="telefone" 
                            value={formData.telefone} 
                            onChange={handleChange}
                            className={errors.telefone ? 'error-border' : ''}
                        />
                        {errors.telefone && <span className="error-msg">{errors.telefone}</span>}
                    </div>
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={errors.email ? 'error-border' : ''}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                {/* Mensagem */}
                <div className="form-group">
                    <label>Mensagem:</label>
                    <textarea 
                        name="mensagem" 
                        rows="5" 
                        value={formData.mensagem} 
                        onChange={handleChange}
                        className={errors.mensagem ? 'error-border' : ''}
                    ></textarea>
                    {errors.mensagem && <span className="error-msg">{errors.mensagem}</span>}
                </div>

                <button type="submit" className="btn-submit">Enviar</button>
            </form>
        </section>
    );
};

const rootElement = document.getElementById('react-contact-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ContactForm />);
}