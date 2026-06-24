import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RentIncreaseCalculator = () => {
    const [currentRent, setCurrentRent] = useState('');
    const [increaseRate, setIncreaseRate] = useState('');
    const [result, setResult] = useState(null);

    const calculateRent = (e) => {
        e.preventDefault();
        const rent = parseFloat(currentRent);
        const rate = parseFloat(increaseRate);

        if (!isNaN(rent) && !isNaN(rate)) {
            const increaseAmount = rent * (rate / 100);
            const newRent = rent + increaseAmount;
            setResult({
                increaseAmount: increaseAmount.toFixed(2),
                newRent: newRent.toFixed(2)
            });
        }
    };

    return (
        <div className="bg-primary/5 p-6 rounded-lg border border-secondary/20 shadow-sm relative">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Kira Artış Oranı Hesaplama</h3>
            <form onSubmit={calculateRent} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Mevcut Kira Bedeli (TL)</label>
                    <input
                        type="number"
                        required
                        value={currentRent}
                        onChange={(e) => setCurrentRent(e.target.value)}
                        className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Örn: 10000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Artış Oranı (%)</label>
                    <input
                        type="number"
                        required
                        step="0.01"
                        value={increaseRate}
                        onChange={(e) => setIncreaseRate(e.target.value)}
                        className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Örn: 65.93"
                    />
                </div>
                <button type="submit" className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded-sm hover:bg-[#cbb66a] transition-colors">
                    Hesapla
                </button>
            </form>

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-primary text-gold-light rounded-sm"
                >
                    <div className="flex justify-between border-b border-secondary/20 pb-2 mb-2">
                        <span className="font-light">Artış Miktarı:</span>
                        <span className="font-bold">{result.increaseAmount} TL</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-light">Yeni Kira Bedeli:</span>
                        <span className="font-bold text-lg text-secondary">{result.newRent} TL</span>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const CorrectionFeeCalculator = () => {
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    const calculateFee = (e) => {
        e.preventDefault();
        const value = parseFloat(amount);

        // Basic approximation for Islah Harcı (Peşin Harç: Binde 68.31'in 1/4'ü)
        if (!isNaN(value)) {
            const totalHarç = value * 0.06831;
            const pesinHarc = totalHarç / 4;
            setResult({
                pesinHarc: pesinHarc.toFixed(2),
                totalHarç: totalHarç.toFixed(2)
            });
        }
    };

    return (
        <div className="bg-primary/5 p-6 rounded-lg border border-secondary/20 shadow-sm relative">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Islah Harcı Hesaplama</h3>
            <form onSubmit={calculateFee} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Artırılan Müddeabih Miktarı (TL)</label>
                    <input
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Örn: 50000"
                    />
                </div>
                <div className="pt-4 mt-4 text-xs text-gray-800 mb-4 opacity-70">
                    <p>* Islah harcı, artırılan kısım üzerinden peşin (binde 68.31'in 1/4'ü) olarak hesaplanmaktadır. Bilgi amaçlıdır.</p>
                </div>
                <button type="submit" className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded-sm hover:bg-[#cbb66a] transition-colors">
                    Hesapla
                </button>
            </form>

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-primary text-gold-light rounded-sm"
                >
                    <div className="flex justify-between border-b border-secondary/20 pb-2 mb-2">
                        <span className="font-light">Yatırılacak Peşin Harç:</span>
                        <span className="font-bold text-lg text-secondary">{result.pesinHarc} TL</span>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const CalculatorsLayout = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Hesaplama <span className="text-secondary">Araçları</span>
                    </h2>
                    <p className="text-gray-800 max-w-2xl mx-auto leading-relaxed">
                        Hukuki süreçlerinizde size yardımcı olması amacıyla hazırladığımız hesaplama araçlarını aşağıdan kullanabilirsiniz.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <RentIncreaseCalculator />
                    <CorrectionFeeCalculator />
                </div>
            </div>
        </div>
    );
};

export default CalculatorsLayout;
