/**
 * ESLint Rule: no-hardcoded-colors
 * Detecta uso de cores hardcoded (slate-*, gray-*, etc.) ao invés de tokens GEMS 5.0
 */

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Detecta uso de cores hardcoded ao invés de tokens do Design System GEMS 5.0',
            category: 'Best Practices',
            recommended: true
        },
        fixable: 'code',
        schema: [{
            type: 'object',
            properties: {
                allowedExceptions: {
                    type: 'array',
                    items: { type: 'string' }
                }
            },
            additionalProperties: false
        }],
        messages: {
            hardcodedColor: 'Evite cores hardcoded "{{color}}". Use tokens GEMS 5.0: {{suggestion}}'
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const allowedExceptions = options.allowedExceptions || ['translate'];

        // Padrões de cores hardcoded proibidos
        const hardcodedColorPatterns = [
            { pattern: /\bslate-\d+\b/, name: 'slate' },
            { pattern: /\bgray-\d+\b/, name: 'gray' },
            { pattern: /\bzinc-\d+\b/, name: 'zinc' },
            { pattern: /\bneutral-\d+\b/, name: 'neutral' },
            { pattern: /\bstone-\d+\b/, name: 'stone' }
        ];

        // Sugestões de replacement
        const tokenSuggestions = {
            'bg-slate-50': 'bg-muted',
            'bg-slate-100': 'bg-muted',
            'bg-slate-200': 'bg-muted',
            'bg-slate-300': 'bg-muted',
            'bg-slate-700': 'bg-card',
            'bg-slate-800': 'bg-muted',
            'bg-slate-900': 'bg-background',
            'text-slate-400': 'text-muted-foreground',
            'text-slate-500': 'text-muted-foreground',
            'text-slate-600': 'text-muted-foreground',
            'text-slate-700': 'text-foreground',
            'text-slate-900': 'text-foreground',
            'border-slate-200': 'border-border',
            'border-slate-300': 'border-border',
            'border-slate-700': 'border-border',
            'border-slate-800': 'border-border'
        };

        function checkStringValue(node, value) {
            if (typeof value !== 'string') return;

            // Ignora exceções permitidas
            for (const exception of allowedExceptions) {
                if (value.includes(exception)) return;
            }

            // Verifica cada padrão de cor hardcoded
            for (const { pattern, name } of hardcodedColorPatterns) {
                const match = value.match(pattern);
                if (match) {
                    const colorClass = match[0];
                    const suggestion = tokenSuggestions[`bg-${colorClass}`] ||
                        tokenSuggestions[`text-${colorClass}`] ||
                        tokenSuggestions[`border-${colorClass}`] ||
                        'bg-background, text-foreground, border-border';

                    context.report({
                        node,
                        messageId: 'hardcodedColor',
                        data: {
                            color: colorClass,
                            suggestion
                        }
                    });
                }
            }
        }

        return {
            Literal(node) {
                checkStringValue(node, node.value);
            },
            TemplateLiteral(node) {
                const value = node.quasis.map(q => q.value.raw).join('');
                checkStringValue(node, value);
            }
        };
    }
};
