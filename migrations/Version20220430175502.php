<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220430175502 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE product_color');
        $this->addSql('DROP TABLE product_size');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_color (product_id INT NOT NULL, color_id INT NOT NULL, INDEX IDX_C70A33B54584665A (product_id), INDEX IDX_C70A33B57ADA1FB5 (color_id), PRIMARY KEY(product_id, color_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE product_size (product_id INT NOT NULL, size_id INT NOT NULL, INDEX IDX_7A2806CB4584665A (product_id), INDEX IDX_7A2806CB498DA827 (size_id), PRIMARY KEY(product_id, size_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B54584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B57ADA1FB5 FOREIGN KEY (color_id) REFERENCES color (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB498DA827 FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE');
    }
}
