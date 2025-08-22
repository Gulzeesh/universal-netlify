import { EXPLORE_ROUTING } from '@/data/constant';
import ExploreHomeCard from './components/ExploreHomeCard';
import Header from '@/components/ui/Header';

function ExploreHome() {
  return (
    <div className="flex h-[calc(100vh-74px)] flex-col gap-8 pb-8">
      <Header
        content={{
          title: [
            { text: 'WindPro Mount™', break: true },
            { text: "India's" },
            { text: 'Safest & Strongest', variant: 'blue' },
            { text: 'Solar' },
          ],
          description: 'Click on any of the below tiles to learn more',
          mixColorsClassName: 'text-center justify-center',
        }}
        className="px-16 pt-6 [&>div]:gap-2"
      />
      <div className="grid w-full flex-grow grid-cols-4 gap-8 px-16">
        {EXPLORE_ROUTING.map((data, index) => (
          <ExploreHomeCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ExploreHome;
