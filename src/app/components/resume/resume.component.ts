import { Component, inject } from '@angular/core';
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
      empresa: 'Edufor consultoria',
      desc: 'Atuo supervisionando uma pequena equipe de desenvolvimento, atuamos com implementação de sistemas e sites web, administração da plataforma AWS, implantando projetos com EC2, Load balancer, VPC, S3 e conteinerização, além de criar Apis de integração com Google analytics e Meta.',
      habilidades: [
        'Angular',
        'NodeJs',
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
      desc: 'Participei de um projeto no qual desenvolvi um sistema de controle de qualidade para uma empresa internacional, com a criação de CRUDS e modelagem de tabelas no banco de dados.',
      habilidades: ['Angular', 'NodeJs', 'Postgres'],
      link: 'https://unifor.br',
    },
    {
      dates: ['03/2021', '02/2022'],
      cargo: 'Estágiario de TI',
      empresa: 'Helio Energias',
      desc: 'Trabalhei com manutenção de projetos legados da empresa, além da criação de novas aplicações, também criava dashboards integrados com o banco de dados, para avaliação de indicadores da empresa.',
      habilidades: ['VBA', 'ACESS', 'Flutter', 'Firebase', 'Power BI'],
      link: 'https://helioenergias.com.br',
    },
  ];

  Educacaos = [
    {
      dates: ['2019', '2024'],
      cargo: 'Bacharelado em Ciências da Computação',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      link: 'https://unifor.br',
    },
    {
      dates: ['2024', '2026'],
      cargo: 'MBA em Ciências de Dados',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      link: 'https://unifor.br',
    },
  ];

  projetos = [
    {
      img: 'assets/projetos/semipresencial/home.png',
      titulo: 'Site Edufor Semipresencial',
      desc: 'Criação do site para a nova faculdade semipresencial da empresa, utilizando Angular e Node, criei todas as páginas e formulários presentes na plataforma, contendo blog, sistema de matrícula, formulários de contato e etc. Configurei a máquina virtual e os domínios para implantar toda a aplicação na AWS.',
      link: 'https://semipresencial.edufor.edu.br',
      habilidades: ['Angular', 'NodeJs', 'Postgres', 'AWS', 'Docker'],
    },
    {
      img: 'assets/projetos/painel-semi/login.png',
      titulo: 'Site - Painel de controle',
      desc: 'Painel de controle para faculdade semipresencial, onde é possivel verificar os candidatos inscritos e criar conteudo para as diversas abas do site.',
      link: '',
      carousel_imgs: [
        'assets/projetos/painel-semi/login.png',
        'assets/projetos/painel-semi/home.png',
        'assets/projetos/painel-semi/cursos.png',
        'assets/projetos/painel-semi/curso-form.png',
        'assets/projetos/painel-semi/noticias.png',
      ],
      habilidades: ['Angular', 'NodeJs', 'Postgres', 'AWS', 'Docker'],
    },
    {
      img: 'assets/projetos/portal/login.png',
      titulo: 'Portal do inscrito',
      desc: 'Portal para que os inscritos do site da faculdade Edufor possam realizar o vestibular, enviar a documentação e acompanhar o status da sua matrícula.',
      habilidades: ['Angular', 'NodeJs', 'Postgres', 'AWS', 'Docker'],
      link: '',
      carousel_imgs: [
        'assets/projetos/portal/login.png',
        'assets/projetos/portal/home.png',
        'assets/projetos/portal/documentos.png',
      ],
    },
    {
      img: 'assets/projetos/electroson/login.jpg',
      titulo: 'Sistema de controle de qualidade',
      desc: 'Trabalhando junto de uma equipe multidisciplinar de bolsistas, além de professores mestres e doutores no laboratorio LEC da unifor, participei na criação de um sistema de qualidade e controle de Ops para uma empresa de desenvolvimento de materiais Opticos.',
      link: '',
      habilidades: ['Angular', 'NodeJs', 'Adonisjs', 'Postgres'],
      carousel_imgs: [
        'assets/projetos/electroson/login.jpg',
        'assets/projetos/electroson/dashboard.jpg',
        'assets/projetos/electroson/form.jpg',
        'assets/projetos/electroson/lista.jpg',
        'assets/projetos/electroson/processo.jpg',
        'assets/projetos/electroson/tratamento.jpg',
      ],
    },
  ];
}
