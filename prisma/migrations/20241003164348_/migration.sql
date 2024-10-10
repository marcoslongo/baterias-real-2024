-- CreateTable
CREATE TABLE `Lead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `faixaFaturamento` VARCHAR(191) NULL,
    `nomeContato` VARCHAR(191) NULL,
    `cargo` VARCHAR(191) NULL,
    `mensagem` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
