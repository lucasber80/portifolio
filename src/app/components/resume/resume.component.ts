import { Component } from '@angular/core';
import { CardExperienciaComponent } from '../card-experiencia/card-experiencia.component';
import { CommonModule } from '@angular/common';
import { CardProjetoComponent } from '../card-projeto/card-projeto.component';
import { CarouselDialogComponent } from '../carousel-dialog/carousel-dialog.component';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CardExperienciaComponent,
    CarouselDialogComponent,
    CardProjetoComponent,
    CommonModule,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  experiencias = [
    {
      dates: ['05/2023', 'PRESENTE'],
      cargo: 'Analista de Desenvolvimento Pleno',
      empresa: 'Edufor Consultoria',
      desc: 'Supervisão de uma equipe composta por três profissionais no desenvolvimento de aplicações web e sites utilizando Angular e Node.js. Administração da plataforma AWS, incluindo a gestão de EC2, Load Balancer, VPC, S3 e Docker. Desenvolvimento de APIs para integração com Google Analytics e Meta.',
      habilidades: [
        'Angular',
        'Node.js',
        'Postgres',
        'AWS',
        'Docker',
        'Planejamento de projetos',
      ],
      link: 'https://www.eduforconsultoria.com.br',
    },
    {
      dates: ['02/2022', '08/2023'],
      cargo: 'Bolsista de Projetos',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      desc: 'Desenvolvi um sistema de controle de qualidade para uma empresa internacional, com foco na criação de CRUDs e modelagem de tabelas em banco de dados, utilizando as tecnologias Angular, Node.js e PostgreSQL.',
      habilidades: ['Angular', 'Node.js', 'Postgres'],
      link: 'https://unifor.br',
    },
    {
      dates: ['03/2021', '02/2022'],
      cargo: 'Estagiário de TI',
      empresa: 'Helio Energias',
      desc: 'Realizei a manutenção de projetos legados, desenvolvi novas aplicações e criei dashboards integrados a bancos de dados para avaliação de indicadores empresariais, utilizando VBA, Microsoft Access, Flutter, Firebase e Power BI.',
      habilidades: ['VBA', 'Access', 'Flutter', 'Firebase', 'Power BI'],
      link: 'https://helioenergias.com.br',
    },
  ];

  educacoes = [
    {
      dates: ['2019', '2024'],
      cargo: 'Bacharelado em Ciências da Computação',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      link: 'https://unifor.br',
    },
    {
      dates: ['2024', '2026'],
      cargo: 'MBA em Ciência de Dados',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      link: 'https://unifor.br',
    },
  ];

  projetos = [
    {
      img: 'assets/projetos/crm/home.png',
      titulo: 'Sistema CRM',
      desc: 'Desenvolvi um CRM educacional para instituições de ensino superior, com a possibilidade de integrações com sites externos e criação de automações.',
      link: '',
      carousel_imgs: [
        'assets/projetos/crm/home.png',
        'assets/projetos/crm/dashboard.png',
        'assets/projetos/crm/funil.png',
      ],
      habilidades: ['Angular', 'Node.js', 'Postgres', 'AWS', 'Docker'],
    },
    {
      img: 'assets/projetos/semipresencial/home.png',
      titulo: 'Site Edufor Semipresencial',
      desc: 'Desenvolvi o site para a nova faculdade semipresencial da empresa utilizando Angular e Node.js. Criei todas as páginas e formulários presentes na plataforma, incluindo blog, sistema de matrícula, formulários de contato, entre outros. Configurei a máquina virtual e os domínios para implantação da aplicação na AWS.',
      link: 'https://semipresencial.edufor.edu.br',
      habilidades: ['Angular', 'Node.js', 'Postgres', 'AWS', 'Docker'],
    },
    {
      img: 'assets/projetos/painel-semi/login.png',
      titulo: 'Painel de Controle',
      desc: 'Desenvolvi um painel de controle para a faculdade semipresencial, permitindo a verificação de candidatos inscritos e a criação de conteúdo para as diversas abas do site.',
      link: '',
      carousel_imgs: [
        'assets/projetos/painel-semi/login.png',
        'assets/projetos/painel-semi/home.png',
        'assets/projetos/painel-semi/cursos.png',
        'assets/projetos/painel-semi/curso-form.png',
        'assets/projetos/painel-semi/noticias.png',
      ],
      habilidades: ['Angular', 'Node.js', 'Postgres', 'AWS', 'Docker'],
    },
    {
      img: 'assets/projetos/portal/login.png',
      titulo: 'Portal do Inscrito',
      desc: 'Criei um portal para que os inscritos do site da Faculdade Edufor possam realizar o vestibular, enviar a documentação e acompanhar o status da matrícula.',
      habilidades: ['Angular', 'Node.js', 'Postgres', 'AWS', 'Docker'],
      link: '',
      carousel_imgs: [
        'assets/projetos/portal/login.png',
        'assets/projetos/portal/home.png',
        'assets/projetos/portal/documentos.png',
      ],
    },
    {
      img: 'assets/projetos/electroson/login.jpg',
      titulo: 'Sistema de Controle de Qualidade',
      desc: 'Trabalhei em colaboração com uma equipe multidisciplinar de bolsistas e professores mestres e doutores no laboratório LEC da UNIFOR. Participei da criação de um sistema de controle de qualidade e gestão de operações para uma empresa de desenvolvimento de materiais ópticos.',
      link: '',
      habilidades: ['Angular', 'Node.js', 'Adonis.js', 'Postgres'],
      carousel_imgs: [
        'assets/projetos/electroson/login.jpg',
        'assets/projetos/electroson/dashboard.jpg',
        'assets/projetos/electroson/form.jpg',
        'assets/projetos/electroson/lista.jpg',
        'assets/projetos/electroson/processo.jpg',
        'assets/projetos/electroson/tratamento.jpg',
      ],
    },
    {
      img: 'assets/projetos/dados/dashboard_streamlit.png',
      titulo: 'Projetos MBA',
      desc: 'Durante meu MBA em Ciência de Dados, criei diversos projetos envolvendo machine learning, engenharia e análise de dados.',
      link: 'https://github.com/lucasber80/data-science-projects',
      habilidades: ['Python', 'Power BI', 'Machine Learning', 'Data Science'],
    },
  ];
}
