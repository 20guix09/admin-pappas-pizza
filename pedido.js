// ==========================================
        // 4. INICIALIZAÇÃO E DADOS DE TESTE (MOCK)
        // ==========================================
        function injetarPedidoDeTeste() {
            let pedidosDb = JSON.parse(localStorage.getItem('pappas_pedidos'));
            
            // Se não existir nenhum pedido no navegador, ele cria o pedido do Gui
            if (!pedidosDb || pedidosDb.length === 0) {
                let pedidoSimulado = {
                    "data": "17:37:24",
                    "endereco": "Geraldo Gonçalves da costa 85",
                    "id": "844419",
                    "itens": [
                        {"item": "Refrigerante 2L", "preco": 12},
                        {"item": "Pizza Grande - Calabresa Especial", "preco": 58.5}
                    ],
                    "nome": "Gui",
                    "pagamento": "Cartão na Entrega",
                    "status": "No Forno",
                    "telefone": "43988024099",
                    "total": 70.5
                };
                localStorage.setItem('pappas_pedidos', JSON.stringify([pedidoSimulado]));
            }
        }

        // Carrega as informações quando a página abre
        window.onload = () => {
            injetarPedidoDeTeste(); // Injeta o teste se estiver vazio
            carregarPedidos();      // Desenha os pedidos na tela
            renderizarCardapio();   // Desenha o cardápio
        };
