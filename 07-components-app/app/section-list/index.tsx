import ThemeCard from '@/presentation/shared/ThemeCard'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemeView from '@/presentation/shared/ThemeView'
import { SectionList } from 'react-native'

interface Houses {
  title: string
  data: string[]
}

const houses: Houses[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)'
    ]
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)'
    ]
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)'
    ]
  }
]

const SectionListScreen = () => {
  return (
    <ThemeView margin>
      <ThemeCard>
        <SectionList
          sections={houses}
          keyExtractor={item => item}
          renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
          ListHeaderComponent={() => (
            <ThemedText className="font-bold mb-3">Characters</ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h1"
              className="bg-light-background dark:bg-dark-background p-2 rounded"
            >
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          ListFooterComponent={() => (
            <ThemedText className="font-bold mb-3 bg-light-background dark:bg-dark-background p-2 m-10 rounded">
              Sections: {houses.length}
            </ThemedText>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ThemeCard>
    </ThemeView>
  )
}
export default SectionListScreen
