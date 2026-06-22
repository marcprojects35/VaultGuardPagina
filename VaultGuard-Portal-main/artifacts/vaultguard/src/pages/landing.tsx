import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shield, Lock, Key, Users, Globe, Terminal, Zap, Server, 
  Database, Cpu, CheckCircle, Fingerprint, Code, ArrowRight,
  Eye, Edit2, Trash2, Share2, FileText, Paperclip, Star,
  Calendar, Layers, MonitorSmartphone, MessageCircle,
  X, Send, Mail, AtSign
} from "lucide-react";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "wouter";
// @ts-ignore
import logoPath from "@assets/logo_1782151144974.png";
import encryptionBg from "@/assets/images/encryption_bg.png";
import serverRoomBg from "@/assets/images/server_room.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
      scrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoPath} alt="VaultGuard Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight text-white">VaultGuard</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#encryption" className="hover:text-white transition-colors">Criptografia</a>
          <a href="#rbac" className="hover:text-white transition-colors">Controle de Acesso</a>
          <a href="#features" className="hover:text-white transition-colors">Recursos</a>
          <a href="#deploy" className="hover:text-white transition-colors">Deploy</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/marcprojects35/VaultGuard" target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
        <motion.img 
          style={{ y: y1 }}
          src={serverRoomBg} 
          alt="Server Room" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-10" style={{ background: "radial-gradient(circle, rgba(212,165,16,0.15) 0%, transparent 70%)" }} />

      <motion.div 
        style={{ opacity }}
        className="relative z-30 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <img src={logoPath} alt="VaultGuard" className="w-24 h-24 object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6"
        >
          Cofre de Senhas <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Corporativo.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          A plataforma self-hosted definitiva para empresas que levam segurança a sério. Sem dependências na nuvem. Sem confiança cega em fornecedores. Apenas você e seus dados.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#deploy" className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden shadow-[0_0_30px_rgba(212,165,16,0.4)] transition-all hover:scale-105">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Deploy com Docker
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EncryptionStory() {
  return (
    <section id="encryption" className="py-32 relative border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img src={encryptionBg} alt="Encryption" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-bold mb-6">
              O Servidor Nunca <br/>Vê a Verdade.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Implementamos criptografia <strong className="text-white">End-to-End</strong> real. O servidor armazena apenas dados cifrados e um salt único. A derivação da chave mestra acontece no seu navegador.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Key, title: "PBKDF2 Client-Side", desc: "Chave mestra derivada com 210.000 iterações SHA-256 no cliente. Fica apenas na memória RAM." },
                { icon: Shield, title: "AES-256-GCM", desc: "Padrão militar de criptografia com autenticação de dados. Cada credencial é encriptada individualmente." },
                { icon: Database, title: "Zero Knowledge", desc: "Se o banco de dados for comprometido, os invasores terão acesso apenas a texto ininteligível." }
              ].map((item, i) => (
                <motion.div key={i} variants={FADE_UP} className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={FADE_UP} className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative bg-card border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-6 font-mono text-sm">
                <div className="bg-background/80 border border-white/5 rounded-lg p-4">
                  <div className="text-muted-foreground mb-2">// 1. Servidor envia salt</div>
                  <div className="text-accent">GET /api/auth/salt?user=admin</div>
                  <div className="text-green-400 mt-1">{"{"} salt: "a8f9c2..." {"}"}</div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-muted-foreground w-6 h-6 rotate-90 lg:rotate-0" />
                </div>
                <div className="bg-background/80 border border-primary/20 rounded-lg p-4 shadow-[0_0_15px_rgba(212,165,16,0.2)]">
                  <div className="text-muted-foreground mb-2">// 2. Frontend deriva master key (RAM)</div>
                  <div className="text-white">masterKey = pbkdf2(password, salt, 210000)</div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-muted-foreground w-6 h-6 rotate-90 lg:rotate-0" />
                </div>
                <div className="bg-background/80 border border-white/5 rounded-lg p-4">
                  <div className="text-muted-foreground mb-2">// 3. Encripta payload e envia</div>
                  <div className="text-white">payload = aes_256_gcm_encrypt(data, masterKey)</div>
                  <div className="text-accent mt-2">POST /api/credentials</div>
                  <div className="text-green-400 mt-1">{"{"} cipher: "v:1:IV:DATA:TAG" {"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RbacHierarchy() {
  const roles = [
    { name: "AUXILIAR", color: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20" },
    { name: "ASSISTENTE", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { name: "ANALISTA", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
    { name: "COORDENAÇÃO", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20" },
    { name: "DIRETORIA", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { name: "ADMINISTRADOR", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
  ];

  const permissions = [
    { icon: Eye, name: "canView" },
    { icon: Edit2, name: "canEdit" },
    { icon: Trash2, name: "canDelete" },
    { icon: Share2, name: "canShare" },
  ];

  return (
    <section id="rbac" className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-bold mb-6">
            Hierarquia de Acesso <br/>Granular.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Controle exatamente quem acessa o que. O modelo de permissões baseado em papéis (RBAC) suporta 6 níveis corporativos rigorosos.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-3 relative">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10 z-0" />
              {roles.map((role, i) => (
                <div key={role.name} className={`relative z-10 flex items-center gap-4 p-4 rounded-xl border ${role.bg} ${role.border} backdrop-blur-sm`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold bg-background ${role.color}`}>
                    {i + 1}
                  </div>
                  <span className={`font-bold tracking-wider ${role.color}`}>{role.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-card border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Layers className="text-primary" /> Permissões por Pasta
            </h3>
            <p className="text-muted-foreground mb-8">
              Configure acessos em nível de pasta, atribuindo permissões para papéis inteiros ou usuários específicos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {permissions.map((perm) => (
                <div key={perm.name} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-white/5">
                  <perm.icon className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">{perm.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
              <strong>Nota de Segurança:</strong> As permissões são validadas tanto no backend quanto na interface. Um usuário sem permissão não recebe nem os metadados da pasta.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CredentialsVault() {
  const features = [
    { icon: FileText, title: "Campos Customizados", desc: "Adicione campos de texto, senha ou URL à vontade. Organize como preferir." },
    { icon: Paperclip, title: "Anexos Seguros", desc: "Suporte a arquivos de até 5MB armazenados no banco em Base64 encriptado." },
    { icon: Star, title: "Favoritos", desc: "Acesso rápido às credenciais mais usadas, específico por usuário." },
    { icon: Zap, title: "Indicador de Força", desc: "Avaliação em tempo real da complexidade das senhas armazenadas." },
    { icon: Calendar, title: "Expiração", desc: "Defina datas de expiração e seja alertado antes que a senha vença." },
    { icon: Globe, title: "Favicon Automático", desc: "Busca visual inteligente baseada na URL cadastrada." },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-bold mb-6">
            O Cofre Definitivo.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não guarde apenas senhas. VaultGuard gerencia todos os segredos digitais da sua empresa com flexibilidade total.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseAuth() {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <Server className="w-4 h-4" /> Enterprise Grade
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Autenticação de <br/>Nível Corporativo.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Integração nativa com sua infraestrutura existente. Projetado para suportar políticas de segurança severas.
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Integração LDAP / Active Directory configurável via UI</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Autenticação de 2 Fatores (TOTP) nativa</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>API Tokens com escopos granulares</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Sessões JWT gerenciadas (timeout configurável)</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Rate Limiting contra ataques de força bruta</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-background/80 border-b border-white/5 p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-muted-foreground font-mono">LDAP Configuration</div>
                <div className="w-10" />
              </div>
              <div className="p-6 space-y-4 font-mono text-sm text-muted-foreground">
                <div>
                  <span className="text-white">LDAP_URL:</span> <span className="text-accent">"ldap://ad.company.local:389"</span>
                </div>
                <div>
                  <span className="text-white">BIND_DN:</span> <span className="text-accent">"CN=BindUser,OU=ServiceAccounts,DC=company,DC=local"</span>
                </div>
                <div>
                  <span className="text-white">SEARCH_BASE:</span> <span className="text-accent">"DC=company,DC=local"</span>
                </div>
                <div>
                  <span className="text-white">SEARCH_FILTER:</span> <span className="text-accent">"(sAMAccountName={"{{username}}" })"</span>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center gap-2 text-green-400">
                  <Zap className="w-4 h-4" /> Connection Successful
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DockerDeploy() {
  return (
    <section id="deploy" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Suba em Segundos.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Arquitetura inteiramente conteinerizada. Nenhuma dependência externa, nenhum SaaS terceirizado. O controle total dos seus dados com um único comando.
          </p>

          <div className="text-left bg-[#0a0a0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <span className="text-xs text-muted-foreground font-mono">Terminal - bash</span>
              <div className="flex gap-2">
                <Shield className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
              <div className="text-muted-foreground mb-2"># Clone o repositório</div>
              <div>
                <span className="text-green-400">user@server</span><span className="text-white">:</span><span className="text-blue-400">~</span><span className="text-white">$ </span>
                <span className="text-white">git clone https://github.com/company/vaultguard.git</span>
              </div>
              <div className="text-muted-foreground mt-4 mb-2"># Inicie a stack (App, Postgres, Nginx)</div>
              <div>
                <span className="text-green-400">user@server</span><span className="text-white">:</span><span className="text-blue-400">~/vaultguard</span><span className="text-white">$ </span>
                <span className="text-primary font-bold">docker compose up -d</span>
              </div>
              <div className="text-muted-foreground mt-4">
                Creating vaultguard_db_1 ... <span className="text-green-400">done</span><br/>
                Creating vaultguard_api_1 ... <span className="text-green-400">done</span><br/>
                Creating vaultguard_web_1 ... <span className="text-green-400">done</span><br/>
                Creating vaultguard_nginx_1 ... <span className="text-green-400">done</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-400">user@server</span><span className="text-white">:</span><span className="text-blue-400">~/vaultguard</span><span className="text-white">$ </span>
                <span className="w-2 h-5 bg-white/80 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExtensionsAndI18n() {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-white/5 rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full" />
          <MonitorSmartphone className="w-12 h-12 text-accent mb-6" />
          <h3 className="text-3xl font-bold mb-4">Extensão Nativa</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Manifest V3 para Chrome e Edge. Injeta credenciais automaticamente nos formulários de login de forma segura via service worker. Sem trocar de aba, fluxo perfeito.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Autofill Automático</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Popup de Busca Rápida</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Comunicação criptografada com API</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-white/5 rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
          <Globe className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-3xl font-bold mb-4">Alcance Global</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Interface traduzida para 28 idiomas, preparada para corporações multinacionais. Suporte total a idiomas RTL (Right-to-Left) como Árabe, Hebraico e Farsi.
          </p>
          <div className="flex flex-wrap gap-2">
            {['pt-BR', 'en-US', 'es', 'fr', 'de', 'ja', 'zh-CN', 'ar'].map(lang => (
              <span key={lang} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono">
                {lang}
              </span>
            ))}
            <span className="px-3 py-1 rounded-md text-xs font-mono text-muted-foreground">
              + 20 outros
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

const CONTACT_EMAIL = "VaultGuard2026@outlook.com";

function ContactSection() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const isValid = name.trim() && subject.trim() && fromEmail.trim() && message.trim() && fromEmail.includes("@");

  const handleSend = () => {
    if (!isValid) return;
    const body = `Nome: ${name}\nDe: ${fromEmail}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => {
      setName(""); setFromEmail(""); setSubject(""); setMessage(""); setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 relative bg-secondary/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,165,16,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" /> Contato
            </motion.div>
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-bold mb-4">
              Em caso de erros,<br />dúvidas ou dicas,<br />
              <span className="text-primary">entre em contato.</span>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-lg text-muted-foreground leading-relaxed">
              Sua mensagem vai diretamente para o desenvolvedor.
            </motion.p>
          </div>

          <motion.div
            variants={FADE_UP}
            className="relative bg-card border border-white/8 rounded-2xl p-8 shadow-[0_0_40px_rgba(212,165,16,0.06)]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-t-2xl" />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Mensagem enviada!</h3>
                <p className="text-muted-foreground text-sm">Seu cliente de e-mail foi aberto com a mensagem pronta.</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nome</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      data-testid="input-name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">E-mail</label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <input
                        type="email"
                        value={fromEmail}
                        onChange={(e) => setFromEmail(e.target.value)}
                        placeholder="seu@email.com"
                        data-testid="input-from-email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Assunto</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Sobre o que você quer falar?"
                    data-testid="input-subject"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mensagem</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva sua dúvida, erro encontrado ou sugestão..."
                    rows={5}
                    data-testid="input-message"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSend}
                  disabled={!isValid}
                  data-testid="button-send-email"
                  whileHover={isValid ? { scale: 1.02 } : {}}
                  whileTap={isValid ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-35 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,165,16,0.25)] hover:shadow-[0_0_32px_rgba(212,165,16,0.45)]"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoPath} alt="VaultGuard Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold tracking-tight text-white">VaultGuard</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-5 text-sm leading-relaxed">
              O gerenciador de senhas self-hosted que coloca o controle de volta nas mãos da sua corporação.
            </p>
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors font-mono" data-testid="footer-email">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://www.instagram.com/marc4code/" target="_blank" rel="noreferrer" data-testid="footer-link-instagram" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/marcoaurelioprudencio/" target="_blank" rel="noreferrer" data-testid="footer-link-linkedin" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/marcprojects35/VaultGuard" target="_blank" rel="noreferrer" data-testid="footer-link-github" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                data-testid="footer-link-contact"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-lg hover:bg-primary/20 transition-colors shadow-[0_0_12px_rgba(212,165,16,0.2)]"
              >
                <MessageCircle className="w-4 h-4" />
                Fale Comigo
              </a>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 border border-white/5">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Key className="w-4 h-4 text-primary" /> Credenciais Iniciais de Sistema
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center p-3 rounded bg-background border border-white/5">
                <span className="text-muted-foreground">Admin Email:</span>
                <span className="text-white">admin@vaultguard.local</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-background border border-white/5">
                <span className="text-muted-foreground">Admin Password:</span>
                <span className="text-white">Admin@123456</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-background border border-white/5">
                <span className="text-muted-foreground">Health Check:</span>
                <span className="text-green-400">GET /api/health</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span>© 2026 VaultGuard Open Source.</span>
            <span className="text-white/20">|</span>
            <span>Desenvolvido por</span>
            <motion.a
              href="https://www.linkedin.com/in/marcoaurelioprudencio/"
              target="_blank"
              rel="noreferrer"
              data-testid="link-developer-marco"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-primary border border-primary/40 bg-primary/10 overflow-hidden cursor-pointer"
            >
              <motion.span
                className="absolute inset-0 bg-primary/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <FaLinkedin className="w-3 h-3 relative z-10" />
              <span className="relative z-10">Marco</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <EncryptionStory />
      <RbacHierarchy />
      <CredentialsVault />
      <EnterpriseAuth />
      <DockerDeploy />
      <ExtensionsAndI18n />
      <ContactSection />
      <Footer />
    </div>
  );
}
