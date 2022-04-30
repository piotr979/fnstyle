<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220425043142 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE stock_size (stock_id INT NOT NULL, size_id INT NOT NULL, INDEX IDX_EEDA7CAEDCD6110 (stock_id), INDEX IDX_EEDA7CAE498DA827 (size_id), PRIMARY KEY(stock_id, size_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE stock_size ADD CONSTRAINT FK_EEDA7CAEDCD6110 FOREIGN KEY (stock_id) REFERENCES stock (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stock_size ADD CONSTRAINT FK_EEDA7CAE498DA827 FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE size DROP FOREIGN KEY FK_F7C0246ADCD6110');
        $this->addSql('DROP INDEX IDX_F7C0246ADCD6110 ON size');
        $this->addSql('ALTER TABLE size DROP stock_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE stock_size');
        $this->addSql('ALTER TABLE size ADD stock_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE size ADD CONSTRAINT FK_F7C0246ADCD6110 FOREIGN KEY (stock_id) REFERENCES stock (id)');
        $this->addSql('CREATE INDEX IDX_F7C0246ADCD6110 ON size (stock_id)');
    }
}
