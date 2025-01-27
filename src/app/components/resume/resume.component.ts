import { Component } from '@angular/core';
import { CardExperienciaComponent } from '../card-experiencia/card-experiencia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CardExperienciaComponent, CommonModule],
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
    },
    {
      dates: ['02/2022', '08/2023'],
      cargo: 'Bolsista de Projetos',
      empresa: 'Universidade de Fortaleza - UNIFOR',
      desc: 'Participei de um projeto no qual desenvolvi um sistema de controle de qualidade para uma empresa internacional, com a criação de CRUDS e modelagem de tabelas no banco de dados.',
      habilidades: ['Angular', 'NodeJs', 'Postgres'],
    },
    {
      dates: ['03/2021', '02/2022'],
      cargo: 'Estágiario de TI',
      empresa: 'Helio Energias',
      desc: 'Trabalhei com manutenção de projetos legados da empresa, além da criação de novas aplicações, também criava dashboards integrados com o banco de dados, para avaliação de indicadores da empresa.',
      habilidades: ['VBA', 'ACESS', 'Flutter', 'Firebase', 'Power BI'],
    },
  ];

  Educacaos = [
    {
      dates: ['2019', '2024'],
      cargo: 'Bacharelado em Ciências da Computação',
      empresa: 'Universidade de Fortaleza - UNIFOR',
    },
    {
      dates: ['2024', '2026'],
      cargo: 'MBA em Ciências de Dados',
      empresa: 'Universidade de Fortaleza - UNIFOR',
    },
  ];
}
