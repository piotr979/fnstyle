<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220425042829 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE stock_color (stock_id INT NOT NULL, color_id INT NOT NULL, INDEX IDX_FA465418DCD6110 (stock_id), INDEX IDX_FA4654187ADA1FB5 (color_id), PRIMARY KEY(stock_id, color_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE stock_color ADD CONSTRAINT FK_FA465418DCD6110 FOREIGN KEY (stock_id) REFERENCES stock (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stock_color ADD CONSTRAINT FK_FA4654187ADA1FB5 FOREIGN KEY (color_id) REFERENCES color (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE color DROP FOREIGN KEY FK_665648E9DCD6110');
        $this->addSql('DROP INDEX IDX_665648E9DCD6110 ON color');
        $this->addSql('ALTER TABLE color DROP stock_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE stock_color');
        $this->addSql('ALTER TABLE color ADD stock_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE color ADD CONSTRAINT FK_665648E9DCD6110 FOREIGN KEY (stock_id) REFERENCES stock (id)');
        $this->addSql('CREATE INDEX IDX_665648E9DCD6110 ON color (stock_id)');
    }
}
