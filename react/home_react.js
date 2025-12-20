/* =================================================
   CÓDIGO REACT - FORMULÁRIO DE CONTACTO
   =================================================
*/

const ContactForm = () => {
    // 1. Estado para guardar os dados do formulário
    const [formData, setFormData] = React.useState({
        nome: '',
        motivo: 'informacao', // Valor padrão
        email: '',
        telefone: '',
        mensagem: ''
    });

    // 2. Estado para guardar mensagens de erro
    const [errors, setErrors] = React.useState({});
    // 3. Estado para feedback de sucesso
    const [status, setStatus] = React.useState(null);

    // Função que atualiza o estado quando o utilizador escreve
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função de Validação
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.nome) {
            tempErrors.nome = "O nome é obrigatório.";
            isValid = false;
        }

        // Regex simples para email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            tempErrors.email = "Insira um email válido.";
            isValid = false;
        }

        if (!formData.telefone || formData.telefone.length < 9) {
            tempErrors.telefone = "O telefone deve ter pelo menos 9 dígitos.";
            isValid = false;
        }

        if (!formData.mensagem) {
            tempErrors.mensagem = "Escreva a sua mensagem.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Função de Envio (Submit)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            // A) Guardar no Local Storage
            // Vamos guardar um array de submissões para não perder as anteriores
            const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
            existingSubmissions.push(formData);
            localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));

            // B) Mostrar sucesso e limpar formulário
            setStatus('success');
            setFormData({ nome: '', motivo: 'informacao', email: '', telefone: '', mensagem: '' });
            setErrors({});

            // Remover mensagem de sucesso após 3 segundos
            setTimeout(() => setStatus(null), 5000);
        } else {
            setStatus('error');
        }
    };

    return (
        <section className="contact-section">
            <h2 className="section-title">Fale Connosco</h2>
            
            {status === 'success' && (
                <div className="alert success">Mensagem enviada e guardada com sucesso!</div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Campo Nome */}
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

                {/* Campo Motivo (Select) */}
                <div className="form-group">
                    <label>Motivo de Contacto:</label>
                    <select name="motivo" value={formData.motivo} onChange={handleChange}>
                        <option value="informacao">Informação Geral</option>
                        <option value="reclamacao">Reclamação</option>
                        <option value="reserva">Reserva de Grupo</option>
                        <option value="parceria">Parcerias</option>
                    </select>
                </div>

                {/* Grupo Email e Telefone lado a lado */}
                <div className="form-row">
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

                {/* Campo Mensagem */}
                <div className="form-group">
                    <label>A sua Mensagem:</label>
                    <textarea 
                        name="mensagem" 
                        rows="5"
                        value={formData.mensagem} 
                        onChange={handleChange}
                        className={errors.mensagem ? 'error-border' : ''}
                    ></textarea>
                    {errors.mensagem && <span className="error-msg">{errors.mensagem}</span>}
                </div>

                <button type="submit" className="btn-submit">Enviar Mensagem</button>
            </form>
        </section>
    );
};

// Renderizar o componente na div que criámos no HTML
const rootElement = document.getElementById('react-contact-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ContactForm />);
}